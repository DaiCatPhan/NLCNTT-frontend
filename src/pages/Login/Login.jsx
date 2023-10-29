import className from "classnames/bind";
import styles from "./Login.module.scss";
const cx = className.bind(styles);

import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Alert, Space, Spin } from "antd";

import { IconEyeOff, IconEye } from "@tabler/icons-react";

import HeaderNone from "../../layouts/components/HeaderNone";
import AuthenticationService from "../../services/AuthenticationService";
import useAuth from "../../hook/useAuth";
import { useDispatch } from "react-redux";
import { toggleLogin } from "../../redux/reducers/userSlice";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isShowPassWord, setIsShowPassword] = useState(false);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { isLogged, role, profile } = useAuth();
  const dispatch = useDispatch();

  const handleLoginSDTorEmail = async (e) => {
    try {
      e.preventDefault();
      if (!email) {
        toast.error("Vui lòng nhập Email  !!!");
        return;
      }
      if (!password) {
        toast.error("Vui lòng nhập mật khẩu");
        return;
      }

      setloading(true);

      const res = await AuthenticationService.loginApi({
        email,
        password,
      });
      if (res?.data?.EC == 0) {
        const dataUser = res.data?.DT?.tokentData;
        const roleUser = dataUser?.role;

        dispatch(
          toggleLogin({
            name: dataUser.name,
            email: dataUser.email,
            role: dataUser.role,
          })
        );

        toast.success("Đăng nhập thành công !!!");

        setloading(false);

        if (roleUser === "admin") {
          navigate("/homeadmin");
        } else {
          navigate("/");
        }
      } else {
        toast.error(res.data.EM);
      }
    } catch (err) {
      console.log("err ", err);
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
              <span>Email: ( NguyenVanA@gmail.com )</span>
            </label>
            <input
              placeholder="Email address or number phone"
              className={cx("form-control")}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                  <IconEyeOff className={cx("iconEye")} />
                ) : (
                  <IconEye className={cx("iconEye")} />
                )}
              </span>
            </div>
          </div>
          {loading ? (
            <div>
              <button
                className={cx("btn_register", { active: email && password })}
                disabled={email && password ? false : true}
                onClick={(e) => handleLoginSDTorEmail(e)}
              >
                <Spin></Spin>
                Login
              </button>
            </div>
          ) : (
            <button
              className={cx("btn_register", { active: email && password })}
              disabled={email && password ? false : true}
              onClick={(e) => handleLoginSDTorEmail(e)}
            >
              Login
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
