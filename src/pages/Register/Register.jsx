import className from "classnames/bind";
import styles from "./Register.module.scss";
import { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeaderNone from "../../layouts/components/HeaderNone";

const cx = className.bind(styles);

function Register() {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [classs, setClasss] = useState();
  const [mssv, setMssv] = useState();
  const [type, setType] = useState("sinhvien");
  const [error, setError] = useState();
  const navigate = useNavigate();

  console.log(type);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API
    axios
      .post("http://localhost:3000/authentication/register", {
        email,
        username,
        password,
        mssv,
        classs,
        type,
      })
      .then((res) => {
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

      <form className={cx("form")} onSubmit={handleSubmit}>
        <h1>Thành viên đăng ký </h1>

        {/* Error */}
        <span className={cx("form-message", "invalid")}>{error}</span>

        {/* Type */}
        <div className={cx("form-group")}>
          <label className={cx("form-label")} htmlFor="type">
            Type
          </label>
          <div className={cx("form_type")}>
            {/* Student */}
            <div className={cx("form-group-type")}>
              <input
                className={cx("input_type")}
                type="radio"
                id="sv"
                name="type"
                value="sinhvien"
                checked={type === "sinhvien"}
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="sv">Sinh viên</label>
            </div>

            {/* Teacher */}
            <div className={cx("form-group-type")}>
              <input
                className={cx("input_type")}
                type="radio"
                id="gv"
                name="type"
                value="giaovien"
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="gv">Giáo viên</label>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className={cx("form-group")}>
          <label className={cx("form-label")} htmlFor="email">
            Email
          </label>
          <input
            className={cx("form-control")}
            type="email"
            id="em"
            onChange={(e) => setEmail(e.target.value)}
          />
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
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* MSSV */}

        {type === "sinhvien" ? (
          <>
            {/* MSSV */}
            <div className={cx("form-group")}>
              <label className={cx("form-label")} htmlFor="mssv">
                MSSV
              </label>
              <input
                className={cx("form-control")}
                type="text"
                id="mssv"
                onChange={(e) => setMssv(e.target.value)}
              />
            </div>

            {/* CLass */}
            <div className={cx("form-group")}>
              <label className={cx("form-label")} htmlFor="class">
                Class
              </label>
              <input
                className={cx("form-control")}
                type="text"
                id="class"
                onChange={(e) => setClasss(e.target.value)}
              />
            </div>
          </>
        ) : (
          <Fragment></Fragment>
        )}

        {/* Password */}
        <div className={cx("form-group")}>
          <label className={cx("form-label")} htmlFor="password">
            Password
          </label>
          <input
            className={cx("form-control")}
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className={cx("btn_register")}>Register</button>
      </form>
    </div>
  );
}

export default Register;
