import className from "classnames/bind";
import styles from "./CoreValues.module.scss";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";

import SideBar from "../component/SideBar";

const cx = className.bind(styles);

function CoreValues() {
  return (
    <div className={cx("wrapper")}>
      <Row>
        <Col xs={8} className={cx("sideLeft")}>
          <SideBar />
        </Col>
        <Col xs={16}>
          <div className={cx("sideRight")}>
            <h1 className={cx("heading")}>Tầm nhìn</h1>
            <div className={cx("itemContent")}>
              <div className={cx("title")}>
                <h1>Thương hiệu du lịch hàng đầu tại Việt Nam</h1>
              </div>
              <p className={cx("text")}>
                Trở thành một trong những{" "}
                <b> thương hiệu du lịch hàng đầu tại Việt Nam </b> và khu vực
                trên các lĩnh vực lưu trú - ẩm thực - lữ hành - giải trí - đào
                tạo và các dịch vụ du lịch khác.
              </p>
              <img
                className={cx("image")}
                src="/src/assets/aboutus/corevalue1.jpg"
                alt=""
              />
            </div>

            <div className={cx("itemContent")}>
              <h1 className={cx("heading")}>Sứ mệnh</h1>
              <div className={cx("title")}>
                <h1>
                  Mang lại trải nghiệm, hạnh phúc đến cho khách hàng, đối tác,
                  người lao động, chủ sở hữu và cộng đồng thông qua các sản phẩm
                  và dịch vụ du lịch.
                </h1>
              </div>
              <p className={cx("text")}>
                Với biểu tượng bông mai vàng 5 cánh bao quanh quả địa cầu,
                Saigontourist Group được tượng trưng cho sứ mệnh nâng tầm vị thế
                du lịch Việt Nam, mang hình ảnh Việt Nam đến khắp năm châu thông
                qua việc cung cấp các trải nghiệm, sản phẩm, dịch vụ độc đáo,
                chứa đựng giá trị văn hóa tinh thần với chất lượng quốc tế.
              </p>
              <img
                className={cx("image")}
                src="/src/assets/aboutus/corevalue2.jpg"
                alt=""
              />
            </div>

            <div className={cx("itemContent")}>
              <h1 className={cx("heading")}>Giá trị cốt lõi</h1>
              <div className={cx("titleValue")}>
                <h1>Chính trực</h1>
                <h1>Hợp lực</h1>
                <h1>Sáng tạo</h1>
                <h1>Hiếu khách</h1>
              </div>
              <p className={cx("text")}>
                Mang đến cho mọi người những cuộc hành trình với nhiều kỉ niệm
                khó quên
              </p>
              <img
                className={cx("image")}
                src="/src/assets/aboutus/corevalue3.jpg"
                alt=""
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CoreValues;
