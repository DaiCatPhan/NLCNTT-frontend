import className from "classnames/bind";
import styles from "./CardFlippingGallery.module.scss";
import {Link} from "react-router-dom";

const cx = className.bind(styles);

function CardFlippingGallery() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("card")}>
        <div className={cx("card__side")}>
          <img
            src="https://demoda.vn/wp-content/uploads/2022/01/hinh-nen-desktop-1-800x533.jpg"
            alt="Universe 01"
          />
          <div className={cx("title")}>
            <h2>Tham quan mexico</h2>
            <h3>mot hanh trinh 2 quoc gia chi co tai vinfase</h3>
          </div>
        </div>
        <div className={cx("card__side", "card__side--back")}>
          <img
            src="https://vapa.vn/wp-content/uploads/2022/12/hinh-nen-dep-hd-001.jpg"
            alt="Universe 02"
          />
          <div className={cx("titleBack")}>
            <h2>Tham quan mexico</h2>
            <h3>
              Trải nghiệm văn hóa ẩm thực truyền thống Mexico với các món nổi
              tiếng như: rượu Tequila, Tacos, Chilaquiles, Tortillas -loại bánh
              ngô hình tròn dẹt được nướng trên chảo đất sét, bên trên phủ nấm,
              bông bí, ớt đỏ khô, thịt heo xay, bột bắp cháy trộn lẫn..
            </h3>
            <Link>
              <button>Xem ngay</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFlippingGallery;
