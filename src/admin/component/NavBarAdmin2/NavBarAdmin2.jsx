import className from "classnames/bind";
import styles from "./NavBarAdmin2.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
const cx = className.bind(styles);

function NavBarAdmin2() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("sidebar")}>
        <ul className={cx("menu")}>
          <li>
            <Link to={"/homeadmin"}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-layout-dashboard"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 4h6v8h-6z"></path>
                  <path d="M4 16h6v4h-6z"></path>
                  <path d="M14 12h6v8h-6z"></path>
                  <path d="M14 4h6v4h-6z"></path>
                </svg>
              </span>
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarAdmin2;
