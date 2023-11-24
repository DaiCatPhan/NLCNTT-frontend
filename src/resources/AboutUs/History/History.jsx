import className from "classnames/bind";
import styles from "./History.module.scss";
import { Col, Row } from "antd";
import Carousel from "react-bootstrap/Carousel";
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
        <Col xs={16}>
          <h1 className={cx("historyTitle", "mt-5")}>LỊCH SỬ PHÁT TRIỂN</h1>
          <div className={cx("contentRight")}>
            <Carousel>
              <Carousel.Item>
                <div className={cx("carousel")}>
                  <img
                    className={cx("imageCarouse")}
                    src="https://saigontourist.com.vn/img/application/about-us/slide/1.jpg"
                    alt=""
                  />
                  <Carousel.Caption>
                    <div className={cx("itemYear")}>
                      <h1 className={cx("year")}>1999</h1>
                      <p className={cx("contentYear")}>
                        Công ty Du lịch Thành phố (Saigontourist) được thành lập
                        theo quyết định số 04/QĐ-UB ngày 01/8/1975 của Ủy ban
                        Quân quản Sài Gòn Gia Định (nay là UBND TP.HCM). Đây là
                        công ty du lịch đầu tiên của thành phố với 236 cán bộ,
                        công nhân viên quản lý một số khách sạn và kinh doanh du
                        lịch, cung ứng tàu biển.
                      </p>
                    </div>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className={cx("carousel")}>
                  <img
                    className={cx("imageCarouse")}
                    src="https://saigontourist.com.vn/img/application/about-us/slide/1.jpg"
                    alt=""
                  />
                  <Carousel.Caption>
                    <div className={cx("itemYear")}>
                      <h1 className={cx("year")}>2000</h1>
                      <p className={cx("contentYear")}>
                        Công ty Du lịch Thành phố (Saigontourist) được thành lập
                        theo quyết định số 04/QĐ-UB ngày 01/8/1975 của Ủy ban
                        Quân quản Sài Gòn Gia Định (nay là UBND TP.HCM). Đây là
                        công ty du lịch đầu tiên của thành phố với 236 cán bộ,
                        công nhân viên quản lý một số khách sạn và kinh doanh du
                        lịch, cung ứng tàu biển.
                      </p>
                    </div>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className={cx("carousel")}>
                  <img
                    className={cx("imageCarouse")}
                    src="https://saigontourist.com.vn/img/application/about-us/slide/1.jpg"
                    alt=""
                  />
                  <Carousel.Caption>
                    <div className={cx("itemYear")}>
                      <h1 className={cx("year")}>1999</h1>
                      <p className={cx("contentYear")}>
                        Công ty Du lịch Thành phố (Saigontourist) được thành lập
                        theo quyết định số 04/QĐ-UB ngày 01/8/1975 của Ủy ban
                        Quân quản Sài Gòn Gia Định (nay là UBND TP.HCM). Đây là
                        công ty du lịch đầu tiên của thành phố với 236 cán bộ,
                        công nhân viên quản lý một số khách sạn và kinh doanh du
                        lịch, cung ứng tàu biển.
                      </p>
                    </div>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default History;
