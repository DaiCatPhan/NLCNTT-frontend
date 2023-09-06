import className from "classnames/bind";
import styles from "./Card.module.scss";
import { useRef, useEffect } from "react";

const cx = className.bind(styles);

function Card({ data }) {
  

  return (
    <div className={cx("wrapper")}>
      <article   className={cx("article")}>
        <figure className={cx("figure")}>
          <img
            className={cx("imageArticle")}
            src={data.url}
            alt="Preview"
            title="Preview"
          />
        </figure>
        <div className={cx("articlePreview")}>
          <h2>{data.title}</h2>
          <p>{data.des}</p>
        </div>
      </article>
    </div>
  );
}

export default Card;
