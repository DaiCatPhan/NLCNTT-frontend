import className from "classnames/bind";
import styles from "./StaticsticalTour.module.scss";
const cx = className.bind(styles);
import { Link } from "react-router-dom";

function StaticsticalTour() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <h1>StaticsticalTour</h1>
      </div>
    </div>
  );
}

export default StaticsticalTour;
