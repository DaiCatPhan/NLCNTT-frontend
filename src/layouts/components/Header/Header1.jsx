import className from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { logout } from "../../../redux/reducers/userSlice";
import Menu from "../../../components/Menu";
import useAuth from "../../../hook/useAuth";
import AuthenticationService from "../../../services/AuthenticationService";
import { IconChevronDown, IconUserCircle } from "@tabler/icons-react";
const cx = className.bind(styles);
import React from "react";

import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space, Tooltip } from "antd";

function Header1() {
  const location = useLocation(); // lấy đường dẫn hiện tại
  const url = location.pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLogged, role, profile } = useAuth();

  async function handleClickLogout() {
    const res = await AuthenticationService.logoutApi();
    dispatch(logout());
    toast.success("Đăng xuất thành công");
    navigate("/authentication/login");
  }

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

  const items = [
    {
      label: <Link to={""}> Đơn hàng của tôi</Link>,
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: <Link to={""}> Hồ sơ của tôi</Link>,
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "Voucher của tôi",
      key: "3",
      icon: <UserOutlined />,
    },
    {
      label: (
        <button onClick={handleClickLogout} className={cx("w-100 rounded p-1 border-primary" )}>
          Đăng xuất
        </button>
      ),
      key: "4",
    },
  ];

  const menuProps = {
    items,
  };

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
          {!isLogged ? (
            <>
              <Link to={"/authentication/register"}>
                <button className={cx("btn_reg")}>Register</button>
              </Link>

              <Link to={"/authentication/login"}>
                <button className={cx("btn_log")}>Login</button>
              </Link>
            </>
          ) : (
            <>
              {/* {profile && <p>{profile.name}</p>}

              <button onClick={handleClickLogout} className={cx("btn_out")}>
                Logout
              </button> */}
              <Space wrap>
                <Dropdown.Button
                  menu={menuProps}
                  placement="bottom"
                  icon={<UserOutlined />}
                >
                  {profile && <p className={cx('text-primary')}>{profile.name}</p>}
                </Dropdown.Button>
              </Space>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header1;
