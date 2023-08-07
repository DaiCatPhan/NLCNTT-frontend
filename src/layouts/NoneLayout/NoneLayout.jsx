import "./NoneLayout.module.scss";

import className from "classnames/bind";
import styles from "./NoneLayout.module.scss";

const cx = className.bind(styles);

function NoneLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      {children}
    </div>
  );
}

export default NoneLayout;
