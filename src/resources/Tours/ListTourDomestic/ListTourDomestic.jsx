import className from "classnames/bind";
import styles from "./ListTourDomestic.module.scss";
import CardDomain from "../../../components/CardDomain";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const cx = className.bind(styles);

function ListTourDomestic() {
  // const [tours, setTours] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3000/api/v1/tour/getTours`, {
  //       params: {
  //         type: "nội địa",
  //       },
  //     })
  //     .then((tours) => {
  //       if (tours.data.mes == "Success") {
  //         setTours(tours.data.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const [tours, setTours] = useState([{
    
  }]);


  return (
    <div className={cx("wrapper")}>
      <div className={cx("domainTour")}>
        <h1>TOUR NỘI ĐỊA</h1>
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

export default ListTourDomestic;
