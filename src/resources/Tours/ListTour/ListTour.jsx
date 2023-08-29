import className from "classnames/bind";
import styles from "./ListTour.module.scss";
import CardFlippingGallery from "../../../components/CardFlippingGallery";

const cx = className.bind(styles);

function ListTour() {
  return (
    <div className={cx("wrapper")}>
      <h1>Wrapper</h1>
      <CardFlippingGallery />
    </div>
  );
}

export default ListTour;
