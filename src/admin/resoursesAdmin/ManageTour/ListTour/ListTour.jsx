import className from "classnames/bind";
import styles from "./ListTour.module.scss";
import { Link } from "react-router-dom";
const cx = className.bind(styles);
import { useEffect, useRef, useState } from "react";
import { Divider, Radio, Space, Table } from "antd";
import TourService from "../../../../services/TourService";
import ModalViewTour from "./component/ModalViewTour/ModalViewTour";

function ListTour() {
  const [dataSourceTour, setDataSourceTour] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [isShowModalView, setIsShowModalView] = useState(false);
  const [dataModalView, setDataModalView] = useState({});
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });

  const handleTableChange = (pagination) => {
    setTableParams({ pagination });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tổng thời gian ",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Tổng thời gian ",
      dataIndex: "priceAdult",
      key: "priceAdult",
    },
    {
      title: "Tổng thời gian ",
      dataIndex: "priceChild",
      key: "priceChild",
    },
    {
      title: "Miền",
      dataIndex: "domain",
      key: "domain",
    },
    {
      title: "Kiểu ",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Link>
            <button
              className={cx("btn", "btn-primary")}
              onClick={() => handleModalViewTour(record)}
            >
              View
            </button>
          </Link>

          <Link to={`/tour-updateTour/${record.id}`}>
            <button className={cx("btn", "btn-warning")}>Update</button>
          </Link>
          <Link>
            <button className={cx("btn", "btn-danger")}>Delete</button>
          </Link>
        </Space>
      ),
    },
  ];

  // handleView
  const handleModalViewTour = async (data) => {
    console.log(">>> dataRecord", data);
    setDataModalView(data);
    setIsShowModalView(true);
  };

  // Goi API lấy data
  const callAPIgetTours = async () => {
    let res = await TourService.getToursByPanigation({
      page: tableParams.pagination.current,
      limit: tableParams.pagination.pageSize,
    });

    if (res && res.data && res.data.EC == 0) {
      const dataCustom = res.data.DT?.tours.map((item) => {
        return {
          id: item.id,
          key: item.id,
          name: item.name,
          duration: item.duration,
          domain: item.domain,
          type: item.type,
          image: item.image,
          vehicle: item.vehicle,
          priceAdult: item.priceAdult,
          priceChild: item.priceChild,
          desriptionHTML: item.desriptionHTML,
          desriptionTEXT: item.desriptionTEXT,
        };
      });

      const totalRows = res?.data?.DT?.totalRows;

      setDataSourceTour(dataCustom);
      setTotalPage(totalRows);
    }
  };

  useEffect(() => {
    callAPIgetTours();
  }, [tableParams]);

  return (
    <div className={cx("wrapper")}>
      <h1>ListTour</h1>
      <div className={cx("listTour", "p-5", "border border-primary")}>
        <Table
          pagination={{
            pageSize: tableParams.pagination.pageSize,
            total: totalPage,
            showSizeChanger: true,
            pageSizeOptions: ["1", "2", "3", "6", "9", "12"],
          }}
          onChange={handleTableChange}
          dataSource={dataSourceTour}
          columns={columns}
          bordered
        />
        ;
      </div>

      <ModalViewTour
        dataModalView={dataModalView}
        setDataModalView={setDataModalView}
        isShowModalView={isShowModalView}
        setIsShowModalView={setIsShowModalView}
      />
    </div>
  );
}

export default ListTour;
