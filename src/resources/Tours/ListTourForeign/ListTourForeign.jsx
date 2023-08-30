import className from "classnames/bind";
import styles from "./ListTourForeign.module.scss";
import CardDomain from "../../../components/CardDomain";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const cx = className.bind(styles);

function ListTourForeign() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/tour/getToursDomestic")
      .then((tours) => {
        if (tours.data.err == 2) {
          setTours(tours.data.mes);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("domainTour")}>
        <h1>TOUR NƯỚC NGOÀI</h1>
        <div></div>
      </div>
      <div className={cx("background")}>
        <section className={cx("gallery")}>
          {tours?.map((tour) => (
            <Link key={tour.id} to={`/tours/${tour.id}`}>
              <CardDomain tour={tour} />
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}

export default ListTourForeign;
