import className from "classnames/bind";
import styles from "./History.module.scss";
import { Col, Row } from "antd";

import { Link } from "react-router-dom";

import SideBar from "../component/SideBar";

const cx = className.bind(styles);

function History() {
  return (
    <div className={cx("wrapper")}>
      <Row>
        <Col xs={8} className={cx("contentLeft")}>
          <SideBar />
        </Col>
        <Col xs={16}></Col>
      </Row>
    </div>
  );
}

export default History;
