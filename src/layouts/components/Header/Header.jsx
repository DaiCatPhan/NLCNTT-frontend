import className from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faArrowAltCircleDown,
  faCalendar,
  faCheckCircle,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import Menu from "../../../components/Menu";
import { useEffect, useState } from "react";

const cx = className.bind(styles);

function Header() {
  const location = useLocation(); // lấy đường dẫn hiện tại
  const url = location.pathname;

  const MENU_ITEMS = [
    {
      id: 1,
      url: "/aboutus/co-cau-to-chuc",
      title: "Cơ cấu tổ chức",
    },
    {
      id: 2,
      url: "/aboutus/tam-nhin-su-menh-gia-tri-cot-loi",
      title: "Tầm nhìn - sứ mệnh - Giá trị cốt lỗi",
    },
    {
      id: 3,
      url: "/aboutus/lich-su-phat-trien",
      title: "Lịch sử phát triển",
    },
    {
      id: 4,
      url: "/aboutus/triet-ly-kinh-doanh",
      title: "Triết lí kinh doanh",
    },
    {
      id: 5,
      url: "/aboutus/linh-vuc-kinh-doanh",
      title: "Lĩnh vực kinh doanh",
    },
  ];

  const domainInCountry = [
    {
      id: 1,
      url: "",
      title: "Miền Bắc",
    },

    {
      id: 2,
      url: "",
      title: "Miền Trung",
    },
    {
      id: 3,
      url: "",
      title: "Miền Nam",
    },
  ];

  const domainInInternational = [
    {
      id: 1,
      url: "",
      title: "Châu Á",
    },

    {
      id: 2,
      url: "",
      title: "Châu Phi",
    },
    {
      id: 3,
      url: "",
      title: "Châu Mĩ",
    },
  ];

  return (
    <div className={cx("wrapepr")}>
      <div className={cx("bgHeading")}>
        <div className={cx("heading")}>
          <div>daicatphan@gmail.com</div>
          <div>0328 472 724</div>
          <div>117 Nguyễn Lâm, P.6, Quận 10 ,Trụ sở</div>
        </div>
      </div>

      <header className={cx("header")}>
        {/* Logo */}
        <div className={cx("logo")}>
          <Link to={"/"}>
            <img
              src="https://vtourist.com.vn/wp-content/uploads/2022/07/LOGO.jpg"
              alt=""
            />
          </Link>
        </div>

        {/*  */}
        <div className={cx("navLink")}>
          <ul className={cx("list_link")}>
            <li className={cx("itemLink")}>
              <Menu items={MENU_ITEMS}>
                <Link
                  className={cx("link", {
                    active: url.includes("/aboutus"),
                  })}
                  to={"/aboutus/co-cau-to-chuc"}
                >
                  Về chúng tôi
                </Link>
              </Menu>
            </li>

            {/* Tour quốc tế */}
            <li className={cx("itemLink")}>
              <Menu items={domainInInternational}>
                <Link
                  className={cx("link", {
                    active: url.includes("/tours/Foreign"),
                  })}
                  to={"/tours/Foreign"}
                >
                  Tour quốc tế
                </Link>
              </Menu>
            </li>

            {/* Tour trong nước */}
            <li className={cx("itemLink")}>
              <Menu items={domainInCountry}>
                <Link
                  className={cx("link", {
                    active: url.includes("/tours/Domestic"),
                  })}
                  to={"/tours/Domestic"}
                >
                  Tour nội địa
                </Link>
              </Menu>
            </li>

            {/* Lien He */}
            <li className={cx("itemLink")}>
              <Link
                className={cx("link", {
                  active: url.includes("/lien-he"),
                })}
                to={"/lien-he"}
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>

        {/* Link */}

        {/* Button */}
        <div className={cx("buttonauthen")}>
          {/* <Link to={"/authentication/register"}>
            <button className={cx("button", "btn_red")}>Register</button>
          </Link> */}

          <Link to={"/authentication/login"}>
            <button className={cx("btn_log")}>Login</button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
