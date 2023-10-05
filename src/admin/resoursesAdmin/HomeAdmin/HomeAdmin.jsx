import className from "classnames/bind";
import styles from "./HomeAdmin.module.scss";
import { useNavigate } from "react-router-dom";

const cx = className.bind(styles);

function HomeAdmin() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <div className={cx("sideLeft")}>
          <h1>It's A Big World Out There , Go Explore</h1>
          <p className={cx("text-secondary mb-5")}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            ipsa tenetur enim aut quasi sint quas perspiciatis. Dolorum pariatur
            iusto sed quod id ea. Sunt quis reprehenderit quia, delectus libero
            impedit quos reiciendis autem labore earum adipisci. Libero, saepe.
            Repudiandae perferendis rem voluptate modi obcaecati excepturi
            tempore ipsam enim ducimus.
          </p>
          <div>
            <button className={cx("btn-lg btn btn-primary mx-2 p-3")}>
              Get exploration
            </button>
            <button className={cx("btn-lg btn btn-warning mx-2 text-white p-3")}>
              Record More
            </button>
          </div>
        </div>
        <div className={cx("sideRight")}>
          <img src="src/assets/admin/travel.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;
