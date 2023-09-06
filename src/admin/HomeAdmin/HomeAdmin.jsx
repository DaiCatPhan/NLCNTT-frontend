import className from "classnames/bind";
import styles from "./HomeAdmin.module.scss";
import { Link } from "react-router-dom";

import NavBarAdmin from "../../components/NavBarAdmin";

const cx = className.bind(styles);

function HomeAdmin() {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}></header>
      <div className={cx("container")}>
        <div className={cx("mainContainer")}>
          <div className={cx("navbar")}>
            <NavBarAdmin />
          </div>
          <div className={cx("content")}></div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;
