import className from "classnames/bind";
import styles from "./BookingTourNearFuture.module.scss";
const cx = className.bind(styles);

function BookingTourNearFuture() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <h1>BookingTourNearFuture</h1>
      </div>
    </div>
  );
}

export default BookingTourNearFuture;
