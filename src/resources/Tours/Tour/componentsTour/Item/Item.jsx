import className from "classnames/bind";
import styles from "./Item.module.scss";

const cx = className.bind(styles);

function Item() {
  return (
    <div className={cx("wrapper")}>
      <h1>Item</h1>
    </div>
  );
}

export default Item;
