import className from "classnames/bind";
import styles from "./CardFlippingGallery.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const cx = className.bind(styles);

function CardFlippingGallery({ url }) {
  const cardRef = useRef();

  useEffect(() => {
    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        console.log("entry", entry);
        if (entry.isIntersecting) {
          entry.target.classList.add(cx("active"));
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    const target = cardRef.current;
    observer.observe(target);
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div ref={cardRef} className={cx("card")}>
        <div className={cx("card__side")}>
          <img src={url} alt="Universe 01" />
          <div className={cx("title")}>
            <h2>Tham quan mexico</h2>
            <h3>mot hanh trinh 2 quoc gia chi co tai vinfase</h3>
          </div>
        </div>
        <div className={cx("card__side", "card__side--back")}>
          <div className={cx("figure")}></div>
          <div className={cx("titleBack")}>
            <h2>Tham quan mexico</h2>
            <h3>
              Trải nghiệm văn hóa ẩm thực truyền thống Mexico với các món nổi
              tiếng như: rượu Tequila, Tacos, Chilaquiles, Tortillas -loại bánh
              ngô hình tròn dẹt được nướng trên chảo đất sét, bên trên phủ nấm,
              bông bí, ớt đỏ khô, thịt heo xay, bột bắp cháy trộn lẫn..
            </h3>
            <div className={cx("btn")}>
              <Link>
                <button>Xem ngay</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFlippingGallery;
