import className from "classnames/bind";
import styles from "./HeaderAdmin.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { IconUser } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
const cx = className.bind(styles);

function HeaderAdmin() {
  const [isShowFormInfo, setIsShowFormInfo] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/dashboard");
    toast.success("Log out success");
  };

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
              <img
                className={cx("iconMes")}
                src="/src/assets/icons/message.svg"
                alt=""
              />
            </span>
            <span>
              <img
                className={cx("iconNoti")}
                src="/src/assets/icons/notification.svg"
                alt=""
              />
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
        {/* <div className={cx("formInfo", { active: isShowFormInfo })}>
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
                <Link onClick={handleLogOut}>
                  <IconUser /> Log out
                </Link>
              </li>
            </ul>
          </div>
        </div> */}
      </header>
    </div>
  );
}

export default HeaderAdmin;
