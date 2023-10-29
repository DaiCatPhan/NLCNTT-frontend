import className from "classnames/bind";
import styles from "./MienNam.module.scss";
const cx = className.bind(styles);

function MienNam() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <h1>Tour Mien Nam</h1> 
      </div>
    </div>
  );
}

export default MienNam;
