import className from "classnames/bind";
import styles from "./ListProcessTour.module.scss";
const cx = className.bind(styles);

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { Divider, Radio, Space, Table } from "antd";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    key: "action",
    render: (record) => (
      <Space size="middle">
        <Link>
          <button className={cx("btn", "btn-primary")}>Tạo process</button>
        </Link>
        <Link>
          <button className={cx("btn", "btn-warning")}>Update process</button>
        </Link>
        <Link>
          <button className={cx("btn", "btn-danger")}>Delete process</button>
        </Link>
      </Space>
    ),
  },
];

function ListProcessTour() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <h1>ListProcessTour</h1>
        <div className={cx("listTour", "p-5")}>
          <Table dataSource={dataSource} columns={columns} />;
        </div>
      </div>
    </div>
  );
}

export default ListProcessTour;
