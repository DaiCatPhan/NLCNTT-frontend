import className from "classnames/bind";
import styles from "./MienNam.module.scss";
const cx = className.bind(styles);

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TourService from "../../../../services/TourService";
import CardDomain from "../../../../components/CardDomain";

function MienNam() {
  const [tours, setTours] = useState([]);

  console.log("res", tours);

  const getDataTours = async () => { 
    const res = await TourService.getTour({
      type: "noidia",
      domain: "miennam",
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
          <h1>TOUR MIỀN NAM</h1>
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

export default MienNam;
