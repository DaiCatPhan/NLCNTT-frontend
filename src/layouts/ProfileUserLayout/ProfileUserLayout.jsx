import className from "classnames/bind";
import styles from "./ProfileUserLayout.module.scss";
const cx = className.bind(styles);

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import NavbarProfile from "../components/NavbarProfileUser";
import NotPermissionPage from "../../admin/component/NotPermissionPage";

function ProfileUserLayout({ children }) {
  const navigate = useNavigate();
  const { isLogged, role, profile } = useAuth();

  if (!isLogged) {
    return <NotPermissionPage />;
  }

  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <Header />
      </header>
      <div className={cx("main")}>
        <div>
          <NavbarProfile />
        </div>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default ProfileUserLayout; 
