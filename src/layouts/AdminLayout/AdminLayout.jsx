import className from "classnames/bind";
import styles from "./AdminLayout.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import NavBarAdmin from "../../admin/component/NavBarAdmin";

const cx = className.bind(styles);

function NoneLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}></header>
      <div className={cx("main")}>
        <div>
          <NavBarAdmin /> 
        </div>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default NoneLayout;
