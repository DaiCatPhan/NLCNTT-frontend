import className from "classnames/bind";
import styles from "./ListCustomer.module.scss";
import { useEffect, useState } from "react";
const cx = className.bind(styles);
import moment from "moment";

import { Table } from "antd";

import CustomerService from "../../../../services/CustomerService";

function ListCustomer() {
  const [pageSize, setPageSize] = useState(5);
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(20);
  const [listData, setListData] = useState([]);

  const handleTableChange = (data) => {
    setCurrent(data.current);
    setPageSize(data.pageSize);
    setTotal(data.total);
  };

  const fetchData = async () => {
    const res = await CustomerService.readPanigation_Customer();
    if (res && res.data.EC == 0) {
      let cus = res.data.DT.users.map((item) => ({
        ...item,
        key: item.id,
      }));

      setListData(cus);
      setTotal(res.data.DT.totalRows);
    }
  };

  useEffect(() => {
    fetchData();
  }, [current, pageSize]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "Email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (record) => <div>{moment(record).format("DD-MM-YYYY")}</div>,
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper", "p-5")}>
        <h1>Danh sách tài khoản khách hàng</h1>
        <div>
          <Table
            dataSource={listData}
            columns={columns}
            onChange={handleTableChange}
            pagination={{
              current: current,
              pageSize: pageSize,
              total: total,
              showSizeChanger: true,
              pageSizeOptions: ["1", "2", "3", "5", "9", "12"],
            }}
            bordered
          />
        </div>
      </div>
    </div>
  );
}

export default ListCustomer;
