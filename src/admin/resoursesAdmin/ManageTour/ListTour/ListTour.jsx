import className from "classnames/bind";
import styles from "./ListTour.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { Divider, Radio, Space, Table } from "antd";

const cx = className.bind(styles);

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
          <button className={cx("btn", "btn-primary")}>View</button>
        </Link>
        <Link>
          <button className={cx("btn", "btn-warning")}>Update</button>
        </Link>
        <Link>
          <button className={cx("btn", "btn-danger")}>Delete</button>
        </Link>
      </Space>
    ),
  },
];

function ListTour() { 
  return (
    <div className={cx("wrapper")}>
      <h1>ListTour</h1>
      <div className={cx("listTour", "p-5")}>
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </div>
  );
}

export default ListTour;
