import className from "classnames/bind";
import styles from "./HomeAdmin.module.scss";
import { Link } from "react-router-dom";

const cx = className.bind(styles);

function HomeAdmin() {
  return (
    <div className={cx("wrapper")}>
      <h1>HomeAmin</h1>
    </div>
  );
}

export default HomeAdmin;
