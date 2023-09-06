import className from "classnames/bind";
import styles from "./MenuItemHeader.module.scss";
import { Link } from "react-router-dom";

const cx = className.bind(styles);

function MenuItemHeader({ data }) {
  return (
    <div className={cx("wrapper")}>
      <h3 className ={cx('title')}>
        <Link to={data.url}>{data.title}</Link> 
      </h3>
    </div>
  );
}

export default MenuItemHeader;
