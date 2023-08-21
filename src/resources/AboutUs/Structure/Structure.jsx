import className from "classnames/bind";
import styles from "./Structure.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import Member from "./Member";
import SideBar from "../component/SideBar";

const cx = className.bind(styles);

function Structure() {
  return (
    <div className={cx("wrapper")}>
      <Row>
        <Col xs={4} className={cx("contentLeft")}> 
          <SideBar />
        </Col>
        <Col xs={8}>
          <Row>
            <div className={cx("position")}>
              <h1 className={cx("companyPersonnel")}>Ban Tổng Giám Đốc</h1>
              <div className={cx("members")}>
                <Member
                  url={
                    "https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/313289436_810542320236353_7103559577876458987_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QU5CGilK5ksAX9q6DCI&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfDBBTyXpiqt_4t0ABYj0s_fdoGSzcMj6gkkj0lt-gcMbQ&oe=64E6093E"
                  }
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
                  url={
                    "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/151385838_824130141471225_1734873415531979799_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=yUVLWqGpuykAX99JRvF&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfAnBp8MTP_JcK2__0eLIziaBb5BqBKTSIV6lL7I8MyGGA&oe=650851E5"
                  }
                  username={"Ngô Phát Đạt"}
                  position={"Phó Giám Đốc"}
                />
                <Member
                  url={
                    "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/358045912_285269967358890_5516249898197579040_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9HNYIPNXd4kAX_OqnfJ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfA5wLya5mLv0AGFdlcUcraT_9n3APoHmJEX_ptdZGcirQ&oe=64E589E0"
                  }
                  username={"Bùi Văn Tiền"}
                  position={"Phó Giám Đốc"}
                />
                <Member
                  url={
                    "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-1/301559514_3431448863839286_5788095641827175647_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=7tgXsSoifEYAX_dLjfx&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBeiMmpxFma55oTgnG5j_Uj_5aAaE5cGkrH2B3Z3KXXwg&oe=64E5E4D6"
                  }
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
