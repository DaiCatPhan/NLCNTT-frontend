import className from "classnames/bind";
import styles from "./AdminLayout.module.scss";
const cx = className.bind(styles);

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NavBarAdmin2 from "../../admin/component/NavBarAdmin3";
import HeaderAdmin from "../../admin/component/HeaderAdmin";
import NotPermissionPage from "../../admin/component/NotPermissionPage";

function AdminLayout({ children }) {
  const navigate = useNavigate();
  const { isLogged, role, profile } = useAuth();
  if (role && role !== "admin") {
    // check k phải là admin thì chuyển trang bạn k có quyền
    return <NotPermissionPage />;
  }

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

export default AdminLayout;
