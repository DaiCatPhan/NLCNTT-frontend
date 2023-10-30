import className from "classnames/bind";
import styles from "./ListTourDomestic.module.scss";
const cx = className.bind(styles);

import CardDomain from "../../../components/CardDomain";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TourService from "../../../services/TourService";

function ListTourDomestic() {
  const [tours, setTours] = useState([]);

  const getDataTours = async () => {
    const res = await TourService.getTour({ type: "noidia" });
    console.log(res);
    if (res && res.data.EC === 0 && res.data.DT.length > 0) {
      setTours(res.data.DT);
    }
  };
  useEffect(() => {
    getDataTours();  
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <div className={cx("domainTour")}>
          <h1>TOUR NỘI ĐỊA</h1>
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

export default ListTourDomestic;
