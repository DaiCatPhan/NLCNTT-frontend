import className from "classnames/bind";
import styles from "./Philosophy.module.scss";
import { Link } from "react-router-dom";

import SideBar from "../component/SideBar";
import {  Col, Row } from "antd";

const cx = className.bind(styles);

function Philosophy() { 
  return (
    <div className={cx("wrapper")}>
      <Row>
        <Col span={8} className={cx("contentLeft")}>
          <SideBar />
        </Col>
        <Col xs={16} className={cx("contentRight")}>
          <h1 className={cx('heading')}>Triết lí kinh doanh</h1>
          <div className={cx("listIcon")}>
            <div className={cx("item")}>
              <img
                className={cx("image")}
                src="https://saigontourist.com.vn/img/application/about-us/icon/1.png"
                alt=""
              />
              <h1 className={cx("title")}>Chính trực</h1>
              <div className={cx("line")}> </div>
            </div>

            <div className={cx("item")}>
              <img
                className={cx("image")}
                src="https://saigontourist.com.vn/img/application/about-us/icon/2.png"
                alt=""
              />
              <h1 className={cx("title")}>Hợp lực</h1>
              <div className={cx("line")}> </div>
            </div>

            <div className={cx("item")}>
              <img
                className={cx("image")}
                src="https://saigontourist.com.vn/img/application/about-us/icon/3.png"
                alt=""
              />
              <h1 className={cx("title")}>Sáng tạo</h1>
              <div className={cx("line")}> </div>
            </div>

            <div className={cx("item")}>
              <img
                className={cx("image")}
                src="https://saigontourist.com.vn/img/application/about-us/icon/4.png"
                alt=""
              />
              <h1 className={cx("title")}>Hiếu khách</h1>
              <div className={cx("line")}> </div>
            </div>
          </div>

          <div className={cx("textContent")}>
            <div className={cx("paragraph")}>
              Gắn các giá trị văn hóa bản địa với hoạt động kinh doanh tạo ra
              chuỗi giá trị mang thương hiệu của Saigontourist Group, quảng bá
              hình ảnh du lịch Việt Nam đến với bạn bè quốc tế và đưa du lịch
              Việt Nam trở thành ngành kinh tế mũi nhọn. Mục tiêu doanh nghiệp
              đồng hành với xã hội, cộng đồng để cùng phát triển về kinh tế và
              các giá trị tinh thần.
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Philosophy;
