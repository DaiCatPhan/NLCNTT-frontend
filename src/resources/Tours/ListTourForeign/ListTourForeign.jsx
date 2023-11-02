import className from "classnames/bind";
import styles from "./ListTourForeign.module.scss";
import CardDomain from "../../../components/CardDomain";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const cx = className.bind(styles);

import TourService from "../../../services/TourService";

function ListTourForeign() {
  const [tours, setTours] = useState([]);

  console.log(tours);

  const fetchData = async () => {
    const res = await TourService.getTour({ type: "nuocngoai" });
    if (res && res.data.DT.length > 0 && res.data.EC === 0) {
      setTours(res.data.DT);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <div className={cx("domainTour")}>
          <h1>TOUR QUỐC TẾ</h1>
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
    </div>
  );
}

export default ListTourForeign;
