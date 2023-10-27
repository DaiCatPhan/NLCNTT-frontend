import className from "classnames/bind";
import styles from "./Order.module.scss";
const cx = className.bind(styles);
import { Tabs } from "antd";

import BookingTourNearFuture from "./components/BookingTourNearFuture";
import BookingTourPass from "./components/BookingTourPass";
import BookingTourAll from "./components/BookingTourAll";
import { useState } from "react";

function Order() {
  const [bookingByCus, setBookingByCus] = useState([]);

  const items = [
    {
      key: "1",
      label: "Chuyến đi sắp tới",
      children: <BookingTourNearFuture />,
    },
    {
      key: "2",
      label: "Lịch sử chuyến đã đi",
      children: <BookingTourPass />,
    },
    {
      key: "3",
      label: "Tất cả chuyến đi",
      children: <BookingTourAll />,
    },
  ];
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
}

export default Order;
