import className from "classnames/bind";
import styles from "./SlideLogo.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const cx = className.bind(styles);

function SlideLogo() {
  const logo = [
    {
      id: 1,
      url: "https://saigontourist.com.vn/img/application/homepage/new-banner/1.jpg",
    },
    {
      id: 2,
      url: "https://saigontourist.com.vn/img/application/homepage/new-banner/2.jpg",
    },
    {
      id: 4,
      url: "https://saigontourist.com.vn/img/application/homepage/new-banner/4.jpg",
    },
    {
      id: 5,
      url: "https://saigontourist.com.vn/img/application/homepage/new-banner/5.jpg",
    },
  ];

  return (
    <Carousel>
      {logo.map((image, index) => (
        <Carousel.Item interval={3000} key={image.id}>
          <img className={cx("image")} src={image.url} alt={image.id} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default SlideLogo;
