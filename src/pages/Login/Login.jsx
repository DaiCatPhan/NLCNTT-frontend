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
import { loginApi } from "../../services/UserService";

const cx = className.bind(styles);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassWord, setIsShowPassword] = useState(false);
  const [loadingIcon, setloadingIcon] = useState(false);

  const navigate = useNavigate();

  // Kiểm tra người dùng đăng nhập rồi thì không cho chuyển về trang login được
  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log(">>>", token);
    if (token) {
      navigate("/homeadmin");
    }
  }, []);

  const handleLoginApi = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email || password is required !");
    }
    try {
      setloadingIcon(true);
      let res = await loginApi({ email, password });
      if (res && res.data.sta === "Success" && res.data.token) {
        toast.success("Đăng nhập thành công");

        // luu local storage
        localStorage.setItem("token", res.data.token);
        setTimeout(() => {
          navigate("/homeadmin");
        }, 1000);
        
      } else {
        if (res && res.data.code === 400) {
          toast.error(res.data.mes);
        } else {
          toast.error(res.data.mes);
        }
      }
      setloadingIcon(false);
    } catch (err) {
      console.log("loi ", err);
    }
  };

  return (
    <div className={cx("app")}>
      {/* Header */}
      <HeaderNone />

      <div className={cx("photograph")}></div>

      <div className={cx("home")}>
        {/* Form */}
        {/* <form onSubmit={handleSubmit(onSubmit)} className={cx("form")}> */}
        <form className={cx("form")}>
          <h1>Đăng nhập</h1>
          <p>Chào mừng bạn đến website du lịch </p>
          <div className={cx("spacer")}></div>

          <div className={cx("form-group")}>
            <label className={cx("form-label")} htmlFor="email">
              <span>Email :</span>
              <span className="m-1">(ex : phandaicat12032002@gmail.com)</span>
            </label>
            <input
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
            className={cx("btn_register", { active: email && password })}
            disabled={email && password ? false : true}
            onClick={(e) => handleLoginApi(e)}
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
