import className from "classnames/bind";
import styles from "./NotFoundPage.module.scss";
const cx = className.bind(styles);
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("notAdmin")}>
        <h1>404!</h1>
        <p>Page Not Found !!! </p>
        <Link to={"/"}>
          <button>BACK TO HOME</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
