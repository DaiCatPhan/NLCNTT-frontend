import className from "classnames/bind";
import styles from "./BookingTourPass.module.scss";
const cx = className.bind(styles);

function BookingTourPass(props) {
  const { data } = props;
  console.log("dataPass", data);
  return (
    <div className={cx("wrapepr")}>
      <div className={cx("bodyWrapper")}>
        <h1>BookingTourPass</h1>
      </div>
    </div>
  );
}

export default BookingTourPass;
