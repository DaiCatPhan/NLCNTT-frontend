import className from "classnames/bind";
import styles from "./ListProcessTour.module.scss";
const cx = className.bind(styles);

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { Divider, Radio, Space, Table } from "antd";
import { Pagination } from "antd";
import moment from "moment";

import ProcessTourService from "../../../../services/ProcessTourService";
import ModalViewProcessTour from "../components/ModalViewProcessTour";
import ModalDeleteProcessTour from "../components/ModalDeleteProcessTour";

function ListProcessTour() {
  const [isShowModalViewProcessTour, setIsShowModalViewProcessTour] =
    useState(false);
  const [dataModalViewProcessTour, setDataModalViewProcessTour] = useState({});
  const [isShowModalDeleteProcessTour, setIsShowModalDeleteProcessTour] =
    useState(false);
  const [dataModalDeleteProcessTour, setDataModalDeleteProcessTour] =
    useState(null);

  const [dataSourceTour, setDataSourceTour] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });

  const handleTableChange = (pagination) => {
    setTableParams({ pagination });
  };

  const callAPIgetTours = async () => {
    let res = await ProcessTourService.getToursByPanigation({
      page: tableParams.pagination.current,
      limit: tableParams.pagination.pageSize,
    });

    if (res && res.data && res.data.EC == 0) {
      let result = [];
      const dataCustom = res.data.DT?.processTours;
      dataCustom.map((item) => {
        let object = {};
        object.key = item.id;
        object.idTour = item.id;
        object.nameTour = item.name;
        object.typeTour = item.type;
        object.domainTour = item.domain;
        object.imageTour = item.image;
        object.idProcessTour = item.ProcessTour?.id;
        object.nameProcessTour = item.ProcessTour?.name;
        object.descriptionHTMLProcessTour = item.ProcessTour?.descriptionHTML;
        object.descriptionTEXTProcessTour = item.ProcessTour?.descriptionTEXT;

        result.push(object);
      });
      const totalRows = res?.data?.DT?.totalRows;

      setDataSourceTour(result.sort((a, b) => b.idTour - a.idTour));
      setTotalPage(totalRows);
    }
  };

  const columns = [
    {
      title: "ID Tour",
      dataIndex: "idTour",
      key: "id",
    },
    {
      title: "Tên Tour",
      dataIndex: "nameTour",
      key: "name",
    },
    {
      title: "Tên chương trình tour",
      dataIndex: "nameProcessTour",
      key: "nameProcessTour",
      render: (nameProcessTour) =>
        nameProcessTour ? (
          <div className={cx("text-primary")}>
            <b>Đã tạo</b>
          </div>
        ) : (
          <div className={cx("text-warning")}>Chưa tạo</div>
        ),
    },

    {
      title: "Ảnh tour ",
      dataIndex: "imageTour",
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
      title: "Chương trình Tour",
      dataIndex: "descriptionHTMLProcessTour",
      key: "descriptionHTMLProcessTour",
      render: (descriptionHTMLProcessTour) =>
        descriptionHTMLProcessTour ? (
          <div className={cx("text-primary")}>
            <b>Đã tạo</b>
          </div>
        ) : (
          <div className={cx("text-warning")}>Chưa tạo</div>
        ),
    },

    {
      title: "Action",
      key: "action",
      width: 50,
      render: (record) => (
        <Space size="middle">
          <Link>
            <button
              onClick={() => handleModalViewProcessTour(record)}
              className={cx("btn", "btn-primary")}
            >
              View
            </button>
          </Link>
          <Link
            to={`/process-createProcessTour/?idTour=${record.idTour}&img=${record.imageTour}&name=${record.nameTour}`}
          >
            <button className={cx("btn", "btn-primary")}>Create </button>
          </Link>

          <Link to={`/process-updateProcessTour/?idTour=${record.idTour}`}>
            <button className={cx("btn", "btn-warning")}>Update </button>
          </Link>
          <Link>
            <button
              onClick={() => handleModalDeleteProcessTour(record)}
              className={cx("btn", "btn-danger")}
            >
              Delete{" "}
            </button>
          </Link>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    callAPIgetTours();
  }, [tableParams]);

  const handleModalViewProcessTour = (record) => {
    setIsShowModalViewProcessTour(true);
    setDataModalViewProcessTour(record);
  };

  const handleModalDeleteProcessTour = (record) => {
    console.log(">> idTour", record);
    setIsShowModalDeleteProcessTour(true);
    setDataModalDeleteProcessTour(record);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <h1 className={cx("mb-4")}>ListProcessTour</h1>
        <div className={cx("")}>
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
      </div>

      {/* Modal View Process Tour */}
      <ModalViewProcessTour
        isShowModalViewProcessTour={isShowModalViewProcessTour}
        setIsShowModalViewProcessTour={setIsShowModalViewProcessTour}
        dataModalViewProcessTour={dataModalViewProcessTour}
        setDataModalViewProcessTour={setDataModalViewProcessTour}
      />

      <ModalDeleteProcessTour
        isShowModalDeleteProcessTour={isShowModalDeleteProcessTour}
        setIsShowModalDeleteProcessTour={setIsShowModalDeleteProcessTour}
        dataModalDeleteProcessTour={dataModalDeleteProcessTour}
        setDataModalDeleteProcessTour={setDataModalDeleteProcessTour}
        callAPIgetTours={callAPIgetTours}
      />
    </div>
  );
}

export default ListProcessTour;
