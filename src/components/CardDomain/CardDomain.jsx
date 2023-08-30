import className from "classnames/bind";
import styles from "./CardDomain.module.scss";

const cx = className.bind(styles);

function CardDomain({ tour }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("article")}>
        <figure className={cx("figure")}>
          <div className={cx("contactPrice")}>Giá liên hệ</div>
          <img
            className={cx("imageArticle")}
            src={tour.urlTour}
            alt={tour.id}
            title="Preview"
          />
          <div className={cx("underLine")}> </div>
        </figure>
        <div className={cx("articlePreview")}>
          <div className={cx("cardbody")}>
            <h2 className={cx("black", "uppercase")}>{tour.nameTour}</h2>
            <p>{tour.nameTour}</p>
            <div className={cx("line")}></div>
            <div className={cx("duration")}>
              <img src="/src/assets/icons/time.svg" alt="" />
              <span>{tour.durationTour}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDomain;
