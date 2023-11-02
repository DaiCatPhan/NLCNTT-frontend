import className from "classnames/bind";
import styles from "./CardDomain.module.scss";
import { IconClockHour1 } from "@tabler/icons-react";

const cx = className.bind(styles);

function CardDomain({ tour }) {
  return (
    <div className={cx("wrapper")}> 
      <div className={cx("article")}>
        <figure className={cx("figure")}>
          <div className={cx("contactPrice")}>Giá liên hệ</div>
          <img
            className={cx("imageArticle")}
            src={tour.image}
            alt={tour.id}
            title="Preview"
          />
          <div className={cx("underLine")}> </div>
        </figure>

        <div className={cx("articlePreview")}>
          <div className={cx("cardbody")}>
            <h2 className={cx("black", "uppercase", "hideTextDot")}>
              {tour.name}
            </h2>
            {tour?.type === "noidia" && (
              <p className={cx("text-secondary", "fs-4")}> Tour nội điạ</p>
            )}
            <div className={cx("line")}></div>
            <div className={cx("duration")}>
              <IconClockHour1 height={20} width={20} />
              <span
                className={cx(
                  "mx-3",
                  "text-secondary",
                  "fs-4",
                  "text-uppercase"
                )}
              >
                {tour.duration}
              </span>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default CardDomain;
