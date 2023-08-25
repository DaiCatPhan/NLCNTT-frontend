import className from "classnames/bind";
import styles from "./BusinessAreas.module.scss";
import { Col, Row } from "antd";

import { Link } from "react-router-dom";

import SideBar from "../component/SideBar";

const cx = className.bind(styles);

function BusinessAreas() {
  return (
    <div className={cx("wrapper")}>
      <Row>
        <Col xs={8} className={cx("contentLeft")}>
          <SideBar />
        </Col>
        <Col xs={16}>Busesadjfaksd</Col>
      </Row>
    </div>
  );
}

export default BusinessAreas;
