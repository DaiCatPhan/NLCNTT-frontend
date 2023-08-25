import className from "classnames/bind";
import styles from "./SideBar.module.scss";

import { Link } from "react-router-dom";

const cx = className.bind(styles);

function BusinessAreas() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("listLink")}>
        <div className={cx("itemLink")}>
          <Link to={"/aboutus/co-cau-to-chuc"} className={cx("textLink")}>
            <h3 className={cx("text")}>Cơ cấu tổ chức</h3>
          </Link>
        </div>

        <div className={cx("itemLink")}>
          <Link
            to={"/aboutus/tam-nhin-su-menh-gia-tri-cot-loi"}
            className={cx("textLink")}
          >
            <h3 className={cx("text")}>Giá trị cốt lõi</h3>
          </Link>
        </div>

        <div className={cx("itemLink")}>
          <Link to={"/aboutus/lich-su-phat-trien"} className={cx("textLink")}>
            <h3 className={cx("text")}> Lịch sử phát triển</h3>
          </Link>
        </div>

        <div className={cx("itemLink")}>
          <Link to={"/aboutus/triet-ly-kinh-doanh"} className={cx("textLink")}>
            <h3 className={cx("text")}>Triết lí kinh doanh</h3>
          </Link>
        </div>

        <div className={cx("itemLink")}>
          <Link to={"/aboutus/linh-vuc-kinh-doanh"} className={cx("textLink")}>
            <h3 className={cx("text")}>Lĩnh vực kinh doanh</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BusinessAreas;
