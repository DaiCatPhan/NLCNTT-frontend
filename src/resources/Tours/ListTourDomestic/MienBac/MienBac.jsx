import className from "classnames/bind";
import styles from "./MienBac.module.scss";
const cx = className.bind(styles);

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TourService from "../../../../services/TourService";
import CardDomain from "../../../../components/CardDomain";

function MienBac() {
  const [tours, setTours] = useState([]);

  const getDataTours = async () => {
    const res = await TourService.getTour({
      type: "noidia",
      domain: "mienbac",
    });
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
          <h1>TOUR MIỀN BẮC</h1>
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

export default MienBac;
