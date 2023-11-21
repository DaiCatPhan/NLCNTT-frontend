import className from "classnames/bind";
import styles from "./Dashboard.module.scss";
import { Link } from "react-router-dom";
import Statistical from "../../../services/Statistical";
import { useEffect, useState } from "react";
const cx = className.bind(styles);

function Dashboard() {
  const [listData, setListData] = useState({});
  const fetchData = async () => {
    const res = await Statistical.dashboard();

    if (res && res.data.EC == 0) {
      setListData(res.data.DT);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("dashboard", "p-5")}>
        <div className={cx("row my-5")}>
          <div className={cx("p-5 border rounded  col-lg mx-4 border-primary text-primary")}>
            Tổng tài khoản khách hàng : {listData?.user}
          </div>
          <div className={cx("p-5 border rounded  col-lg mx-4 border-warning text-warning")}>
            Tổng tour hiện có : {listData?.tour}
          </div>

          <div className={cx("p-5 border rounded  col-lg mx-4 border-success text-success")}>
            Tổng đơn hàng chưa duyệt : {listData?.donHang}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
