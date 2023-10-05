import className from "classnames/bind";
import styles from "./HeaderAdmin.module.scss";
const cx = className.bind(styles);

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { IconBrandMessenger, IconUser } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/reducers/userSlice";

import AuthenticationService from "../../../services/AuthenticationService";
import { IconBellRinging } from "@tabler/icons-react";

function HeaderAdmin() {
  const [isShowFormInfo, setIsShowFormInfo] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleClickLogout() {
    const res = await AuthenticationService.logoutApi();
    dispatch(logout());
    navigate("/authentication/login");
  }

  const handleIsShowFormInfo = () => {
    setIsShowFormInfo(!isShowFormInfo);
  };

  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <div className={cx("navHeader")}>
          <div className={cx("logo")}>
            <Link to={"/homeAdmin"}>
              <h1>Travel</h1>
            </Link>
          </div>
          <div className={cx("info")}>
            <span>
              <IconBrandMessenger color="white" height={30} width={30} />
            </span>
            <span className="mx-3">
              <IconBellRinging color="white" height={30} width={30} />
            </span>
            <span>
              <img
                onClick={handleIsShowFormInfo}
                className={cx("iconUser")}
                src="/src/assets/aboutus/image3.jpg"
                alt=""
              />
            </span>
          </div>
        </div>

        {/* Form */}
        <div className={cx("formInfo", { active: isShowFormInfo })}>
          <div className={cx("infoUser")}>
            <p className={cx("name")}>Phan Dai cat</p>
            <p className={cx("email")}>daicat@gmail.com</p>
          </div>
          <hr />

          <div className={cx("items")}>
            <ul>
              <li>
                <Link>
                  <IconUser /> My profile
                </Link>
              </li>

              <li>
                <Link>
                  <IconUser /> My profile
                </Link>
              </li>

              <li>
                <Link onClick={handleClickLogout}>
                  <IconUser /> Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderAdmin;
