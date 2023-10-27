import className from "classnames/bind";
import styles from "./BookingTourAll.module.scss";
const cx = className.bind(styles);

function BookingTourAll() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <h1>BookingTourAll</h1>
      </div>
    </div>
  );
}

export default BookingTourAll;
