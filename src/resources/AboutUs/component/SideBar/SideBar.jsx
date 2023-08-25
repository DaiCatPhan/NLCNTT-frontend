import className from "classnames/bind";
import styles from "./SideBar.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";


const cx = className.bind(styles);

function BusinessAreas() { 
  return (
    <div className={cx("wrapper")}>
      <div className={cx("listLink")}>
        <h3 className={cx("link")}>
          <Link to={"/aboutus/co-cau-to-chuc"} className={cx("textLink")}>
            Cơ cấu tổ chức
          </Link>
        </h3>
        <h3 className={cx("link")}>
          <Link
            to={"/aboutus/tam-nhin-su-menh-gia-tri-cot-loi"}
            className={cx("textLink")}>
            Giá trị cốt lõi
          </Link>
        </h3>
        <h3 className={cx("link")}>
          <Link to={"/aboutus/lich-su-phat-trien"} className={cx("textLink")}>
            Lịch sử phát triển
          </Link>
        </h3>
        <h3 className={cx("link")}>
          <Link to={"/aboutus/triet-ly-kinh-doanh"} className={cx("textLink")}>
            Triết lí kinh doanh
          </Link>
        </h3>
        <h3 className={cx("link")}>
          <Link to={"/aboutus/linh-vuc-kinh-doanh"} className={cx("textLink")}>
            Lĩnh vực kinh doanh
          </Link>
        </h3>
      </div>
    </div>
  );
}

export default BusinessAreas;
