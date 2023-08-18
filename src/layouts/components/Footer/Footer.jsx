import className from "classnames/bind";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const cx = className.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
        <div className={cx("linkFooter")}>
          <ul>
            <li>
              <a href="">Lưu trú</a>
            </li>
            <li>
              <a href="">Lữ hành</a>
            </li>
            <li>
              <a href="">Ẩm thực</a>
            </li>
            <li>
              <a href="">Giải trí</a>
            </li>
            <li>
              <a href="">Đào tạo</a>
            </li>
          </ul>
        </div> 
       
        <div className={cx("end")}>
          <h2>@2023 Tourist Group</h2>
          <div className ={cx('lienhe')}>
            <p>Địa chỉ : Caí Răng , TP Cần Thơ    </p>
            <p>SDT : 0328472724</p>
            <p>Email : phandaicat12032002@gmail.com</p>
          </div>
          <div>
            <span>Sơ đồ website</span>
            <span>Du lịch</span>
          </div>
        </div>
    </div>
  );
}

export default Footer;
