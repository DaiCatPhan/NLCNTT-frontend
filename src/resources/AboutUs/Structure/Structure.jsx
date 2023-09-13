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
                    "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/371792714_1728959110885660_5503769153923947505_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=52f669&_nc_ohc=gIpBhpsKIJ8AX8zgNjz&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfB-i0cVDpaXiNPM7fHCT16tED4zzmbkahfHJrVlDTZP7A&oe=6505837F"
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
