import className from "classnames/bind";
import styles from "./Tour.module.scss";
import Tab from "./componentsTour/Tab";
import Item from "./componentsTour/Item";
import { Row, Col } from "antd";
import { useState } from "react";

const cx = className.bind(styles);

function Tour() {
  const items = [
    {
      key: "1",
      label: "Chương trình Tour",
      children: <Item />,
    },
    {
      key: "2",
      label: "Qui định",
      children: <Item />,
    },
    {
      key: "3",
      label: "Bảng giá chi tiết",
      children: <Item />,
    },
    {
      key: "4",
      label: "Nhận xét",
      children: <Item />,
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <Row className={cx("rowFirst")}>
        <Col span={14}>
          <div className={cx("")}>
            <img
              className={cx("imageTour")}
              src="https://www.vietourist.com.vn/public/frontend/uploads/files/tour/POSTER_DA_LAT_-_NHA_TRANG_2023_1.jpg"
              alt="1"
            />
          </div>
        </Col>
        <Col span={10}>
          <div className={cx("table")}>
            <Row className={cx("itemInfo")}>
              <Col span={12}>
                <Row>
                  <span className={cx("icon")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                  </span>
                  <p className={cx("title")}>Khởi hành : </p>
                </Row>
              </Col>

              <Col>
                <p className={cx("text")}>Thu 4 hang thang</p>
              </Col>
            </Row>

            <Row className={cx("itemInfo")}>
              <Col span={12}>
                <Row>
                  <span className={cx("icon")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                  </span>
                  <p className={cx("title")}>Khởi hành : </p>
                </Row>
              </Col>

              <Col>
                <p className={cx("text")}>Thu 4 hang thang</p>
              </Col>
            </Row>

            <Row className={cx("itemInfo")}>
              <Col span={12}>
                <Row>
                  <span className={cx("icon")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                  </span>
                  <p className={cx("title")}>Khởi hành : </p>
                </Row>
              </Col>

              <Col>
                <p className={cx("text")}>Thu 4 hang thang</p>
              </Col>
            </Row>

            <Row className={cx("itemInfo")}>
              <Col span={12}>
                <Row>
                  <span className={cx("icon")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                  </span>
                  <p className={cx("title")}>Khởi hành : </p>
                </Row>
              </Col>

              <Col>
                <p className={cx("text")}>Thu 4 hang thang</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row className={cx("rowSecond")}>
        <Tab items={items} />
      </Row>
    </div>
  );
}

export default Tour;
