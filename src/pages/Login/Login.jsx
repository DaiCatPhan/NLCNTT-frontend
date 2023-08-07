import className from "classnames/bind";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

import Header from "../../layouts/components/Header";

const cx = className.bind(styles);

function Login() {
  return (
    <div className={cx("wrapper")}>
      {/* Header */}
      <Header />

      <div className={cx("photograph")}></div>
      {/* Home */}
      <div className={cx("home")}>
        <div className={cx("content")}>
          <h1>Codehal</h1>
          <h2>Welcome!</h2>
          <h3>To Our Nem Website</h3>
          <p>klasjfklsdajkflasdfdsjfasdkfjaksddfkjljasdklfjksd</p>
        </div>
        <div className={cx("form")}>
          <form className={cx("form_login")}>
            <h2 className={cx("heading_form")}>Sing in</h2>
            {/* Email */}
            <div className={cx("form_group")}>
              <input
                type="text"
                className={cx("form_control")}
                placeholder="Email"
              />
            </div>
            {/* Password */}
            <div className={cx("form_group")}>
              <input
                type="password"
                className={cx("form_control")}
                placeholder="Password"
              />
            </div>

            {/* Check */}
            <div className={cx("check")}>
              <label htmlFor="" className={cx('form_label')}>
                <input type="checkbox" />
                <span>Remember me ?</span>
              </label>
            </div>

            {/* Sing up */}
            <div className={cx("sing_up")}>
              <p>Dont have an account ?</p>
              <Link to={'/authentication/register'}><span>Sing up</span></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
