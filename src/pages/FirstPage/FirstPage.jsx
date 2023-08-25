import className from "classnames/bind";
import styles from "./FirstPage.module.scss";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import SlideLogo from "../../components/SlideLogo";

const cx = className.bind(styles);

function FirstPage() {
  const imgList = [
    {
      id: "anh1",
      url: "https://images.pexels.com/photos/59516/pexels-photo-59516.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "anh2",
      url: "https://images.pexels.com/photos/2734521/pexels-photo-2734521.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "anh3",
      url: "https://images.pexels.com/photos/3722813/pexels-photo-3722813.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "anh4",
      url: "https://images.pexels.com/photos/3266523/pexels-photo-3266523.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "anh5",
      url: "https://images.pexels.com/photos/2764743/pexels-photo-2764743.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "anh6",
      url: "https://images.pexels.com/photos/3593923/pexels-photo-3593923.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
 
  return (
    <div className={cx("wrapper")}>
      {/* Logo */}
      <div className={cx("nav")}>
        <SlideLogo />
      </div>

      {/* Container */}
      <div className={cx("main")}>
        <Row>
          <div className={cx("introduction")}>
            <h3 className={cx("introduction-first")}>EXPLORE OUR TOURS</h3>
            <h1 className={cx("introduction-second")}>
              New and Most Popular Tours
            </h1>
          </div>
        </Row>

        <Row className={cx("paragraph")}>
          <Col xs={7}>
            <p className={cx("text")}>
              Trường Trung cấp Du lịch & Khách sạn Saigontourist (STHC), là cơ
              sở đào tạo nghề du lịch uy tín hàng đầu tại Việt Nam, không chỉ
              đào tạo cho hệ thống Saigontourist Group mà còn cho cả nguồn nhân
              lực du lịch Tp. HCM và cả nước, thông qua các chương trình đào tạo
              tại Trường, theo nhu cầu của các doanh nghiệp, các địa phương...
              Trường luôn liên kết với các khách sạn 4-5 sao trong hệ thống
              Saigontourist Group và các đối tác nhằm tạo điều kiện thuận lợi
              nhất cho các học viên nâng cao chất lượng thực hành tại môi trường
              thực tế theo tiêu chuẩn ngành. Bên cạnh đó, mở rộng quan hệ hợp
              tác với các đối tác uy tín chuyên ngành đào tạo du lịch hàng đầu
              thế giới.
            </p>

            <button className={cx("button", "btn")}>Xem thêm</button>
          </Col>
          <Col>
            <p className={cx("text")}>
              Trường Trung cấp Du lịch & Khách sạn Saigontourist (STHC), là cơ
              sở đào tạo nghề du lịch uy tín hàng đầu tại Việt Nam, không chỉ
              đào tạo cho hệ thống Saigontourist Group mà còn cho cả nguồn nhân
              lực du lịch Tp. HCM và cả nước, thông qua các chương trình đào tạo
              tại Trường, theo nhu cầu của các doanh nghiệp, các địa phương...
              Trường luôn liên kết với các khách sạn 4-5 sao trong hệ thống
              Saigontourist Group và các đối tác nhằm tạo điều kiện thuận lợi
              nhất cho các học viên nâng cao chất lượng thực hành tại môi trường
              thực tế theo tiêu chuẩn ngành. Bên cạnh đó, mở rộng quan hệ hợp
              tác với các đối tác uy tín chuyên ngành đào tạo du lịch hàng đầu
              thế giới.
            </p>
          </Col>
        </Row>

        <Row className={cx("imageList")}>
          {imgList.map((img) => (
            <Col xs={4}>
              <div className={cx("cardImage")}>
                {img.url && (
                  <img
                    className={cx("imageTravel")}
                    src={img.url}
                    alt={img.id}
                  />
                )}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default FirstPage;
