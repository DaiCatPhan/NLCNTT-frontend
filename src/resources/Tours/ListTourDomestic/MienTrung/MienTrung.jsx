import className from "classnames/bind";
import styles from "./MienTrung.module.scss";
const cx = className.bind(styles);

function MienTrung() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <h1>Tour Miên Trung</h1>
      </div>
    </div>
  );
}

export default MienTrung;
