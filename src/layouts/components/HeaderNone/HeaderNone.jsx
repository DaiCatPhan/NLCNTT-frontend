import className from "classnames/bind";
import styles from "./HeaderNone.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const cx = className.bind(styles);

function HeaderNone() {
  const location = useLocation();
  const pathUrl = location.pathname;
  const [currentUrl, setCurrentUrl] = useState(pathUrl);
  return (
    <header className={cx("header")}>
      <ul className={cx("list_link")}>
        <li>
          <Link to="/">Travel</Link>
        </li>
      </ul>
      <div className={cx("buttonauthen")}>
        <Link to={"/authentication/register"}>
          {currentUrl !== "/authentication/register" && (
            <button className={cx("btn_reg")}>Register</button>
          )}
        </Link>
        <Link to={"/authentication/login"}>
          {currentUrl !== "/authentication/login" && (
            <button className={cx("btn_log")}>Login</button>
          )}
        </Link>
      </div>
    </header>
  );
}

export default HeaderNone;
