import className from "classnames/bind";
import styles from "./Structure.module.scss";

const cx = className.bind(styles);

function Member({ url, username, position }) {
  return (
    <div className={cx("member")}>
      <img className={cx("image")} src={url} alt="anh1" />
      <h1 className={cx("username")}>{username}</h1>
      <h2 className={cx("description")}>{position}</h2>
    </div>
  );
}

export default Member;
