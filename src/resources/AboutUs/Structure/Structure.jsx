import className from "classnames/bind";
import styles from "./Structure.module.scss";
import { Col, Row } from "antd";

import { Link } from "react-router-dom";

import Member from "./Member";
import SideBar from "../component/SideBar";

const cx = className.bind(styles);

function Structure() {
  return (
    <div className={cx("wrapper")}>
      <Row>
        <Col xs={8} className={cx("contentLeft")}>
          <SideBar />
        </Col>
        <Col xs={16}>
          <Row>
            <div className={cx("position")}>
              <h1 className={cx("companyPersonnel")}>Chủ tịch</h1>
              <div className={cx("members")}>
                <Member
                  url={
                    "https://res.cloudinary.com/dylppkwa9/image/upload/v1698661964/DaiCat/Nha_Vy_cxlecp.jpg"
                  }
                  username={"Dương Nhã Vy"}
                  position={"Chủ tịch hội đồng quản trị"}
                />
              </div>
            </div>
          </Row>

          <Row>
            <div className={cx("position")}>
              <h1 className={cx("companyPersonnel")}>Ban Giám Đốc</h1>
              <div className={cx("members")}>
                <Member
                  url={"/src/assets/aboutus/image3.jpg"}
                  username={"Phan Đài Cát"}
                  position={"Tổng Giám Đốc"}
                />
              </div>
            </div>
          </Row>

          <Row>
            <div className={cx("position")}>
              <h1 className={cx("companyPersonnel")}>Hội Đồng Thành Viên</h1>
              <div className={cx("members")}>
                <Member
                  url={"/src/assets/aboutus/image1.jpg"}
                  username={"Ngô Phát Đạt"}
                  position={"Phó Giám Đốc"}
                />
                <Member
                  url={"/src/assets/aboutus/image2.jpg"}
                  username={"Bùi Văn Tiền"}
                  position={"Phó Giám Đốc"}
                />
                <Member
                  url={"/src/assets/aboutus/image4.jpg"}
                  username={"Bùi Tuấn Kiệt"}
                  position={"Phó Giám Đốc"}
                />
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Structure;
