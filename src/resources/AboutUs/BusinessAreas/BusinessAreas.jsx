import className from "classnames/bind";
import styles from "./BusinessAreas.module.scss";
import { Col, Row } from "antd";

import SideBar from "../component/SideBar";

const cx = className.bind(styles);

function BusinessAreas() {
  return (
    <div className={cx("wrapper")}>
      <Row>
        <Col xs={8} className={cx("contentLeft")}>
          <SideBar />
        </Col>
        <Col xs={16}>
          <div className={cx("sideRight")}>
            <h1 className={cx("heading")}> Lĩnh vực kinh doanh </h1>
            <div className={cx("itemContent")}>
              <div className={cx("title")}>
                <h1>Thương hiệu du lịch hàng đầu tại Việt Nam</h1>
              </div>
              <p className={cx("text")}>
                Tự hào là tập đoàn du lịch đa dịch vụ hàng đầu tại Việt Nam,
                Saigontourist Group không chỉ khẳng định vị thế, tầm ảnh hưởng
                cùng phạm vi hoạt động rộng khắp tại thị trường du lịch trong
                nước. Chúng tôi còn vươn tầm ra khu vực và trên thế giới khi
                đóng vai trò thành viên chính thức của nhiều tổ chức du lịch có
                uy tín như Hiệp hội Du lịch Châu Á - Thái Bình Dương (PATA),
                Hiệp hội Du lịch Nhật Bản (JATA), Hiệp hội Du lịch Hoa Kỳ
                (USTOA),… Hoạt động kinh doanh của Saigontourist Group bao gồm
                05 lĩnh vực cốt lõi.
              </p>
            </div>

            <div className={cx("businessAreas")}>
              <div className={cx("area")}>
                <img
                  className={cx("imageBusiness")}
                  src="https://saigontourist.com.vn/files/images/banner/thumb/600x600/m-th-c.jpg"
                  alt=""
                />
                <span className={cx("nameBusiness")}>Ẩm thực</span>
              </div>

              <div className={cx("area")}>
                <img
                  className={cx("imageBusiness")}
                  src="https://saigontourist.com.vn/files/images/banner/thumb/600x600/lu-hanh.jpg"
                  alt=""
                />
                <span className={cx("nameBusiness")}>Lữ hành</span>
              </div>

              <div className={cx("area")}>
                <img
                  className={cx("imageBusiness")}
                  src="https://saigontourist.com.vn/files/images/banner/thumb/600x600/hotel.jpg"
                  alt=""
                />
                <span className={cx("nameBusiness")}>Lưu trú</span>
              </div>

              <div className={cx("area")}>
                <img
                  className={cx("imageBusiness")}
                  src="https://saigontourist.com.vn/files/images/banner/thumb/600x600/o-t-o.jpg"
                  alt=""
                />
                <span className={cx("nameBusiness")}>Đào tạo</span>
              </div>

              <div className={cx("area")}>
                <img
                  className={cx("imageBusiness")}
                  src="https://saigontourist.com.vn/files/images/banner/thumb/600x600/gi-i-tr.jpg"
                  alt=""
                />
                <span className={cx("nameBusiness")}>Giải trí</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default BusinessAreas;
