import className from "classnames/bind";
import styles from "./Register.module.scss";
import { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeaderNone from "../../layouts/components/HeaderNone";
import { useForm } from "react-hook-form";

const cx = className.bind(styles);

function Register() {
  const [err, setError] = useState();
  const navigate = useNavigate();

  console.log(err);

  // Validate form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/authentication/register", data)
      .then((res) => {
        console.log(res);
        if (res.data === "Success") {
          navigate("/authentication/login");
        } else {
          setError(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={cx("wrapper")}>
      <HeaderNone />

      <div className={cx("photograph")}></div>

      <form onSubmit={handleSubmit(onSubmit)} className={cx("form")}>
        <h1>Thành viên đăng ký </h1>
        {/* Email */}
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
            })}
          />
          <span className={cx("form-message")}>{errors.email?.message}</span>
        </div>

        {/* Username */}
        <div className={cx("form-group")}>
          <label className={cx("form-label")} htmlFor="username">
            Username
          </label>
          <input
            className={cx("form-control")}
            type="text"
            id="username"
            {...register("username", {
              required: "Username is required",
            })}
          />
          <span className={cx("form-message")}>{errors.username?.message}</span>
        </div>

        {/* Password */}
        <div className={cx("form-group")}>
          <label className={cx("form-label")} htmlFor="password">
            Password
          </label>
          <input
            className={cx("form-control")}
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          <span className={cx("form-message")}>{errors.password?.message}</span>
        </div>

        {/* Error */}
        <span className={cx("form-message", "invalid")}>{err ? err : ""}</span>

        <button type="submit" className={cx("btn_register")}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
