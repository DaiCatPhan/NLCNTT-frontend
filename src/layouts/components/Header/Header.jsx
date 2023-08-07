import className from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const cx = className.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <ul className={cx("list_link")}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">Views</a>
        </li>
      </ul>
      <div className={cx("buttonauthen")}>
        <Link to={"/authentication/register"}>
          <button className={cx('button btn_reg')}>Register</button>
        </Link>
        <Link to={"/authentication/login"}>
          <button className={cx('button btn_log')}>Login</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
