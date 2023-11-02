import className from "classnames/bind";
import styles from "./ListBookingTour.module.scss";
const cx = className.bind(styles);
import { Link } from "react-router-dom";

function ListBookingTour() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <h1>ListBookingTour</h1>
      </div>
    </div>
  );
}

export default ListBookingTour;
