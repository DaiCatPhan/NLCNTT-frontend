import className from "classnames/bind";
import styles from "./CardHover.module.scss";

const cx = className.bind(styles);

function CardHover({imgTravel}) {
  return (
    <div className={cx("wrapper")}>
      <span className={cx("background")}>
        <span className={cx("centering")}>
          <section className={cx("articles")}>
            {imgTravel.map((cardImage, index) => (
              <article className={cx("article")}>
                <figure className={cx("figureImage")}>
                  <img
                    className={cx("imgArti")}
                    src={cardImage.url}
                    alt="Preview"
                    title="Preview"
                  />
                </figure>

                <div className={cx("articlePreview")}>
                  <h2 className={cx("titlearticlePreview")}>
                    {cardImage.title}
                  </h2>
                  <p className={cx("textarticlePreview")}>{cardImage.des}</p>
                </div>
              </article>
            ))}
          </section>
        </span>
      </span>
    </div>
  );
}

export default CardHover;
