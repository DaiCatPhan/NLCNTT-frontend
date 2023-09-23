import className from "classnames/bind";
import styles from "./NotPermissionPage.module.scss";
const cx = className.bind(styles);
import { Link } from "react-router-dom";

function NotPermissionPage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("notAdmin")}>
        <h1>403!</h1>
        <p>Unfortunately , you do not have permission to view this page !!! </p>
        <Link to={'/'}>
          <button>BACK TO HOME</button>
        </Link>
      </div>
    </div>
  );
}

export default NotPermissionPage;
