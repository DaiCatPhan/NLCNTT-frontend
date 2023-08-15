import className from "classnames/bind";
import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';

import HeaderNone from "../../layouts/components/HeaderNone";

const cx = className.bind(styles);

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "all"
  });


  const onSubmit = data => {
    console.log(data)
    // CALL API

  };



  return (
    <div className={cx("app")}>
      {/* Header */}
      <HeaderNone />

      <div className={cx("photograph")}></div>

      <div className={cx("home")}>

        {/* Content */}
        <div className={cx("content")}>
          <h1>Codehal</h1>
          <h2>Welcome!</h2>
          <h3>To Our Nem Website</h3>
        </div>


        {/* Form */}
        <div className={cx("wrapper")}>
          <form  onSubmit={handleSubmit(onSubmit)} className={cx("form")}  >
            <h1>Đăng nhập</h1>
            <p>Chào mừng bạn đến website du lịch </p>
            <div className={cx("spacer")}></div>

            <div className={cx("form-group")}>
              <label className={cx("form-label")} htmlFor="email">
                Email
              </label>
              <input
                className={cx("form-control")}
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Email must be avalid'
                  }
                })}
              />
              <span className={cx("form-message")}>{errors.email?.message}</span>
            </div>

            {/* Password */}
            <div className={cx("form-group")}>
              <label className={cx("form-label")} htmlFor="password">
                Mật khẩu
              </label>
              <input
                className={cx("form-control")}
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    minLength: 5,
                    message: "Password must be atleast 5 characters long",
                  },
                })}

              />
              <span className={cx("form-message")}>{errors.password?.message}</span>
            </div>

            <button  className={cx("btn_register")}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
