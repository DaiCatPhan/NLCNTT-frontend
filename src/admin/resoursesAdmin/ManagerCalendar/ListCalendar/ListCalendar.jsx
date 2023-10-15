import className from "classnames/bind";
import styles from "./ListCalendar.module.scss";
const cx = className.bind(styles);

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IconAsterisk } from "@tabler/icons-react";
import { Space, Table, Tag } from "antd";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import moment from "moment";

import Select from "react-select";
import { useState } from "react";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function ListCalendar() {
  const [selectedOption, setSelectedOption] = useState(null);

  const [numberSeat, setNumberSeat] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  console.log(startDate, endDate);

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
      title: "Tên Tour",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tổng chỗ ngồi",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Ngày bắt đầu",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <button>View</button>
          <button>Update</button>
          <button>Delete</button>
        </Space>
      ),
    },
  ];

  const handleChangeSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleSubmitCalendar = () => {
    console.log(numberSeat, startDate, endDate);
  };

  return (
    <div className={cx("wraper")}>
      <div className={cx("bodyWrapper")}>
        <div className={cx("add", "border my-5 p-5")}>
          <Select
            value={selectedOption}
            onChange={handleChangeSelect}
            options={options}
          />

          <Form>
            <Form.Group>
              <div
                className={cx("flex-wrap  d-flex justify-content-between my-5")}
              >
                <div className={cx("")}>
                  <Form.Label className={cx("")}>
                    Tổng số chỗ ngồi <IconAsterisk height={10} color="red" />
                  </Form.Label>
                  <Form.Control
                    placeholder="Tổng số chỗ ngồi"
                    className={cx("customInput")}
                    spellCheck={false}
                    value={numberSeat}
                    onChange={(e) => setNumberSeat(e.target.value)}
                  />
                </div>

                <div className={cx("")}>
                  <div>
                    <Form.Label>
                      Ngày bắt đầu
                      <IconAsterisk height={10} color="red" />
                      <span className={cx("fs-4", "text-secondary")}></span>
                    </Form.Label>
                  </div>

                  <DatePicker
                    className={cx("customInput")}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                  />
                </div>

                <div className={cx("")}>
                  <div>
                    <Form.Label>
                      Ngày kết thúc
                      <IconAsterisk height={10} color="red" />
                      <span className={cx("fs-4", "text-secondary")}></span>
                    </Form.Label>
                  </div>
                  <DatePicker
                    className={cx("customInput")}
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd/MM/yyyy"
                    minDate={startDate}
                  />
                </div>
              </div>
            </Form.Group>
          </Form>

          <div className={cx("text-center")}>
            <button onClick={handleSubmitCalendar}>Taọ lịch</button>
          </div>
        </div>
        <div className={cx("tableList")}>
          <Table dataSource={dataSource} columns={columns} bordered />
        </div>
      </div>
    </div>
  );
}

export default ListCalendar;
