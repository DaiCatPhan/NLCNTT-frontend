import className from "classnames/bind";
import styles from "./HeaderNone.module.scss";
import { Link } from "react-router-dom";

const cx = className.bind(styles);

function HeaderNone() {
  return (
    <header className={cx("header")}>
      <ul className={cx("list_link")}>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <div className={cx("buttonauthen")}>
        <Link to={"/authentication/register"}>
          <button className={cx("button", "btn_reg")}>Register</button>
        </Link>
        <Link to={"/authentication/login"}>
          <button className={cx("button ", "btn_log")}>Login</button>
        </Link>
      </div>
    </header>
  );
}

export default HeaderNone;
