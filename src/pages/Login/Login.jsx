import className from "classnames/bind";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { IconEyeOff, IconEye } from "@tabler/icons-react";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import HeaderNone from "../../layouts/components/HeaderNone";
import AuthenticationService from "../../services/AuthenticationService";

const cx = className.bind(styles);

function Login() {
  const [password, setPassword] = useState("");
  const [valueLogin, setValueLogin] = useState("");
  const [isShowPassWord, setIsShowPassword] = useState(false);
  const [loadingIcon, setloadingIcon] = useState(false);

  const navigate = useNavigate();

  const handleLoginSDTorEmail = async (e) => {
    e.preventDefault();
    if (!valueLogin) {
      toast.error("Vui lòng nhập Email or SDT !!!");
      return;
    }
    if (!password) {
      toast.error("Vui lòng nhập mật khẩu");
      return;
    }

    const res = await AuthenticationService.loginApi({ valueLogin, password });
    if (res && res.data && +res.data.EC === 0) {
      const roleUser = res.data.DT.tokentData.role;

      toast.success("Đăng nhập thành công !!!");
      if (roleUser === "admin") {
        navigate("/homeadmin");
      } else {
        navigate("/");
      }
    } else {
      toast.error(res.data.EM);
    }
  };

  return (
    <div className={cx("app")}>
      {/* Header */}
      <HeaderNone />

      <div className={cx("photograph")}></div>

      <div className={cx("home")}>
        {/* Form */}
        <form className={cx("form")}>
          <h1>Đăng nhập</h1>
          <p>Chào mừng bạn đến website du lịch </p>
          <div className={cx("spacer")}></div>

          <div className={cx("form-group")}>
            <label className={cx("form-label")} htmlFor="email">
              <span>Email: (nvt@student.ctu.edu.vn )</span>
            </label>
            <input
              placeholder="Email address or number phone"
              className={cx("form-control")}
              type="email"
              value={valueLogin}
              onChange={(e) => setValueLogin(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className={cx("form-group")}>
            <label className={cx("form-label")} htmlFor="password">
              Mật khẩu
            </label>
            <div className={cx("handleEyeIcon", "form-group")}>
              <input
                placeholder="Password"
                className={cx("form-control")}
                type={isShowPassWord ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span onClick={() => setIsShowPassword(!isShowPassWord)}>
                {isShowPassWord ? (
                  <IconEye className={cx("iconEye")} />
                ) : (
                  <IconEyeOff className={cx("iconEye")} />
                )}
              </span>
            </div>
          </div>
          <button
            className={cx("btn_register", { active: valueLogin && password })}
            disabled={valueLogin && password ? false : true}
            onClick={(e) => handleLoginSDTorEmail(e)}
          >
            {loadingIcon && (
              <SyncOutlined spin style={{ fontSize: 16, fontWeight: 800 }} />
            )}
            &nbsp; Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
