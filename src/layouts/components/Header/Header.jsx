import className from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional

const cx = className.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      {/* Logo */}
      <div className={cx("logo")}>
        <ul className={cx("list_link")}>
          <li className={cx("itemLink")}>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>

      <div className={cx("")}>
        <ul className={cx("list_link")}>
          <li className={cx("itemLink")}>
            <Tippy
              render={(attrs) => (
                <div className={cx("result")} tabIndex="-1" {...attrs}>
                  Ket qua
                </div>
              )}
              visible
              interactive>
              <Link to={"/"}>Về chúng tôi</Link>
            </Tippy>
          </li>
        </ul>
      </div>

      {/* Link */}

      {/* Button */}
      <div className={cx("buttonauthen")}>
        <Tippy
          render={(attrs) => (
            <div className={cx("result")} tabIndex="-1" {...attrs}>
              Ket qua
            </div>
          )}
          visible
          interactive>
          <Link to={"/authentication/register"}>
            <button className={cx("button", "btn_red")}>Register</button>
          </Link>
        </Tippy>

        {/* <Link to={"/authentication/register"}>
          <button className={cx("button", "btn_red")}>Register</button>
        </Link>

        <Link to={"/authentication/login"}>
          <button className={cx("button", "btn_log")}>Login</button>
        </Link> */}
      </div>
    </header>
  );
}

export default Header;
