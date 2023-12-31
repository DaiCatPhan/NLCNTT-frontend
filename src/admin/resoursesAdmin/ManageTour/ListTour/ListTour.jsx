import className from "classnames/bind";
import styles from "./ListTour.module.scss";
const cx = className.bind(styles);
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Divider, Radio, Space, Table } from "antd";
import { IconPlus } from "@tabler/icons-react";

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
      title: "Ảnh tour ",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={image}
          alt="Image"
          style={{ width: "100px", height: "100px" }}
        />
      ),
    },
    {
      title: "Tổng thời gian ",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Giá vé người lớn ",
      dataIndex: "priceAdult",
      key: "priceAdult",
      render: (priceAdult) => {
        return <div>{priceAdult?.replace(/(\d)(?=(\d{3})+$)/g, "$1.")} </div>;
      },
    },
    {
      title: "Giá vé trẻ em ",
      dataIndex: "priceChild",
      key: "priceChild",
      render: (priceChild) => {
        return <div>{priceChild?.replace(/(\d)(?=(\d{3})+$)/g, "$1.")} </div>;
      },
    },
    {
      title: "Miền",
      dataIndex: "domain",
      key: "domain",
      render: (domainTour) => {
        if (domainTour === "mienbac") {
          return <div> Miền bắc</div>;
        } else if (domainTour === "mientrung") {
          return <div> Miền trung</div>;
        } else if (domainTour === "miennam") {
          return <div> Miền nam</div>;
        } else {
          return <div>Nước ngoài</div>;
        }
      },
    },
    {
      title: "Kiểu ",
      dataIndex: "type",
      key: "type",
      render: (typeTour) =>
        typeTour === "noidia" ? <div>Nội địa </div> : <div>Nước ngoài</div>,
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

          <Link to={`/tour-updateTour/?idTour=${record.id}`}>
            <button className={cx("btn", "btn-warning")}>Update</button>
          </Link>
        </Space>
      ),
    },
  ];

  // handleView
  const handleModalViewTour = async (data) => {
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

      setDataSourceTour(dataCustom.sort((a, b) => b.id - a.id));
      setTotalPage(totalRows);
    }
  };

  useEffect(() => {
    callAPIgetTours();
  }, [tableParams]);

  return (
    <div className={cx("wrapper")}>
      <h1>ListTour</h1>
      <div className={cx("listTour", "p-5")}>
        <div
          className={cx(
            " my-3 d-flex justify-content-between align-items-center"
          )}
        >
          <div>
            <Link to={"/process-listProcessTour"}>
              <button className={cx("btn btn-primary fs-5 mx-2")}>
                Manager Process Tour
              </button>
            </Link>
            <Link to={"/calendar-createCalendarTour"}>
              <button className={cx("btn btn-primary fs-5 mx-2")}>
                Manager Calendar Tour
              </button>
            </Link>
          </div>
          <div>
            <Link to={"/tour-createTour"}>
              <button className={cx("btn border border-primary fs-5 mx-2")}>
                <IconPlus color="blue" /> Create New Tour
              </button>
            </Link>
          </div>
        </div>
        <Table
          pagination={{
            pageSize: tableParams.pagination.pageSize,
            total: totalPage,
            showSizeChanger: true,
            pageSizeOptions: ["1", "2", "3", "5", "9", "12"],
          }}
          onChange={handleTableChange}
          dataSource={dataSourceTour}
          columns={columns}
          bordered
        />
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
