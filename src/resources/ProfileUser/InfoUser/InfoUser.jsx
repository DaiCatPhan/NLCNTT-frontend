import className from "classnames/bind";
import styles from "./InfoUser.module.scss";
const cx = className.bind(styles);

function InfoUser() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <h1>InfoUser</h1>
      </div>
    </div>
  );
}

export default InfoUser;
