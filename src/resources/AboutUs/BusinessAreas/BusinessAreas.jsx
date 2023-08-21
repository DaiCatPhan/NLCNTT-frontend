import className from "classnames/bind";
import styles from "./BusinessAreas.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import SideBar from "../component/SideBar";

const cx = className.bind(styles);

function BusinessAreas() {
  return (
    <div className={cx("wrapper")}>
      <Row>
        <Col xs={4} className={cx("contentLeft")}>
          <SideBar />
        </Col>
        <Col xs={8}></Col>
      </Row>
    </div>
  );
}

export default BusinessAreas;
