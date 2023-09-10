import className from "classnames/bind";
import styles from "./Dashboard.module.scss";
import { Link } from "react-router-dom";

const cx = className.bind(styles);

function Dashboard() {
  return (
    <div className={cx("wrapper")}>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
