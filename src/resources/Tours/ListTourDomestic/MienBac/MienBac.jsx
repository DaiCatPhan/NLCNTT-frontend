import className from "classnames/bind";
import styles from "./MienBac.module.scss";
const cx = className.bind(styles);

function MienBac() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <h1>Tour mien bac</h1>
      </div>
    </div>
  );
}

export default MienBac;
