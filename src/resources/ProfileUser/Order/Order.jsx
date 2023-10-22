import className from "classnames/bind";
import styles from "./Order.module.scss";
const cx = className.bind(styles);

function Order() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <h1>Order</h1>
      </div>
    </div>
  );
}

export default Order;
