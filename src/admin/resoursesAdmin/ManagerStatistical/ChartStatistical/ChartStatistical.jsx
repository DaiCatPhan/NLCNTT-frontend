import className from "classnames/bind";
import styles from "./ChartStatistical.module.scss";
const cx = className.bind(styles);
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useEffect, useMemo, useState } from "react";
import BookingTourService from "../../../../services/BookingTourService";

function ChartStatistical() {
  const [revenueList, setRevenueList] = useState([]);

  const fetchData = async () => {
    const res = await BookingTourService.revenue();
    if (res && res.data.EC === 0) {
      setRevenueList(res.data.DT);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const result = useMemo(() => {
    let month = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    revenueList.forEach((item) => {
      item.monthly.forEach((value, index) => {
        month[index] += value;
      });
    });
    return month;
  }, [revenueList]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper", "p-5  ")}>
        <h4>Doanh thu theo tháng tính theo VND</h4>
        <Bar
          data={{
            labels: result.map((item, index) => "Tháng " + (index + 1)),
            datasets: [
              {
                label: "Doanh thu tổng tất cả tour theo tháng",
                data: result.map((item, index) => item),
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default ChartStatistical;
