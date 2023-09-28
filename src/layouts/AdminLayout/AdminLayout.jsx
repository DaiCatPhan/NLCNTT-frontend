import className from "classnames/bind";
import styles from "./AdminLayout.module.scss";
const cx = className.bind(styles);

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NavBarAdmin from "../../admin/component/NavBarAdmin";
import HeaderAdmin from "../../admin/component/HeaderAdmin";
import NotPermissionPage from "../../admin/component/NotPermissionPage";

function AdminLayout({ children }) {
  const navigate = useNavigate();
  const { isLogged, role, profile } = useAuth();

  console.log(">> isLogin", isLogged);
  console.log(">> role", role);

  if (!isLogged) {
    return <NotPermissionPage />;
  }

  if (role && role !== "admin") {
    return <NotPermissionPage />;
  }

  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <HeaderAdmin />
      </header>
      <div className={cx("main")}>
        <div>
          <NavBarAdmin />
        </div>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
