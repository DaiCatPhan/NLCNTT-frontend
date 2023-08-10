import className from "classnames/bind";
import styles from "./Login.module.scss";
// import { Link } from "react-router-dom";

import HeaderNone from "../../layouts/components/HeaderNone";
import { useState } from "react";

const cx = className.bind(styles);

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API
    console.log({ email, password });
  };

  return (
    <div className={cx("app")}>
      {/* Header */}
      <HeaderNone />

      <div className={cx("photograph")}></div>
      {/* Home */}
      <div className={cx("home")}>
        <div className={cx("content")}>
          <h1>Codehal</h1>
          <h2>Welcome!</h2>
          <h3>To Our Nem Website</h3>
          <p>klasjfklsdajkflasdfdsjfasdkfjaksddfkjljasdklfjksd</p>
        </div>


        {/* Form */}
        <div className={cx("wrapper")}>
          <form onSubmit={handleSubmit} className={cx("form")}>
            <h1>Đăng nhập</h1>
            <p>Chào mừng bạn đến kho album miễn phí</p>
            <div className={cx("spacer")}></div>

            <div className={cx("form-group")}>
              <label className={cx("form-label")} htmlFor="email">
                Email
              </label>
              <input
                className={cx("form-control")}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className={cx("form-message")}></span>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className={cx("form-message")}></span>
            </div>

            <button className={cx("btn_register")}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
