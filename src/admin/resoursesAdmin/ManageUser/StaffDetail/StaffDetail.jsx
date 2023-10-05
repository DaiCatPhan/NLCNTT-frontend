import className from "classnames/bind";
import styles from "./StaffDetail.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const cx = className.bind(styles);

function StaffDetail() {
  let params = useParams();
  const [id, setId] = useState(params.id);
  const [dataUser, setdataUser] = useState({});

  // useEffect(async () => {
  //   const getStaffData = await getUser();   
  // });

  return (
    <div className={cx("wrapper")}>
      <h1>StaffDetail</h1>
    </div>
  );
}

export default StaffDetail;
