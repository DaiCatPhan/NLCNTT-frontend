import className from "classnames/bind";
import styles from "./AdminLayout.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import NavBarAdmin2 from "../../admin/component/NavBarAdmin3";
import HeaderAdmin from "../../admin/component/HeaderAdmin";

const cx = className.bind(styles);

function NoneLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <HeaderAdmin />
      </header>
      <div className={cx("main")}>
        <div>
          <NavBarAdmin2 />
        </div>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default NoneLayout;
