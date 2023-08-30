import className from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
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
import { useState } from "react";

const cx = className.bind(styles);

function Header() {
  const [underline, setUnderline] = useState(false);
  console.log(underline);
  const onLickLink = () => {
    setUnderline(!underline);
  };

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
    <header className={cx("header")}>
      {/* Logo */}
      <div className={cx("logo")}>
        <ul className={cx("list_link")}>
          <li className={cx("itemLink")}>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>

      {/*  */}
      <div className={cx("")}>
        <ul className={cx("list_link")}>
          <li className={cx("itemLink")}>
            <Menu items={MENU_ITEMS}>
              <Link onClick={onLickLink}>Về chúng tôi</Link>
            </Menu>
            <div className={cx("lineLink")}></div>
          </li>

          {/* Tour quốc tế */}
          <li className={cx("itemLink")}>
            <Menu items={domainInInternational}>
              <Link to={"/tours/Foreign"}>Tour quốc tế</Link>
            </Menu>
            <div className={cx("lineLink")}></div>
          </li>

          {/* Tour trong nước */}
          <li className={cx("itemLink")}>
            <Menu items={domainInCountry}>
              <Link to={"/tours/Domestic"}>Tour nội địa</Link>
            </Menu>
            <div className={cx("lineLink")}></div>
          </li>

          {/* Lien He */}
          <li className={cx("itemLink")}>
            <Link to={"/lien-he"}>Liên hệ</Link>
            <div className={cx("lineLink")}></div>
          </li>
        </ul>
      </div>

      {/* Link */}

      {/* Button */}
      <div className={cx("buttonauthen")}>
        <Link to={"/authentication/register"}>
          <button className={cx("button", "btn_red")}>Register</button>
        </Link>

        <Link to={"/authentication/login"}>
          <button className={cx("button", "btn_log")}>Login</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
