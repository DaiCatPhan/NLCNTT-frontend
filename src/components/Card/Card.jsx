import className from "classnames/bind";
import styles from "./Card.module.scss"; 

const cx = className.bind(styles);

function Card({ data }) {
  return (
    <div className={cx("wrapper")}>
      <article>
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
