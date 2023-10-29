import className from "classnames/bind";
import styles from "./Order.module.scss";
const cx = className.bind(styles);
import { Tabs } from "antd";

import BookingTourOrder from "./components/BookingTourOrder";
import { useEffect, useMemo, useState } from "react";

import CustomerService from "../../../services/CustomerService";

import useAuth from "../../../hook/useAuth";

function Order() {
  const { profile } = useAuth();
  const [orderDetail, setOrderDetail] = useState({});
  const [allBooking, setAllBooking] = useState([]);

  const fetchDataOrder = async () => {
    try {
      const res = await CustomerService.fetchDataCusOrderByEmail({
        email: profile?.email,
      });
      if (res && res.data.EC === 0) {
        setOrderDetail(res.data.DT);
        setAllBooking(res.data.DT.BookingTours);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchDataOrder();
  }, []);

  // Lọc ra những tour đã đi rồi
  const bookingPass = useMemo(() => {
    const dateCurrent = new Date();
    const result = allBooking.filter((item) => {
      const dateItem = new Date(item.Calendar.startDay);
      return dateItem < dateCurrent;
    });
    return result;
  }, [allBooking]);

  // Lọc ra những tour trong tương lại
  const bookingFuture = useMemo(() => {
    const dateCurrent = new Date();
    const result = allBooking.filter((item) => {
      const dateItem = new Date(item.Calendar.startDay);
      return dateItem >= dateCurrent;
    });
    return result;
  }, [allBooking]);

  const items = [
    {
      key: "1",
      label: "Chuyến đi sắp tới",
      children: <BookingTourOrder dataProps={bookingFuture} />,
    },
    {
      key: "2",
      label: "Lịch sử chuyến đã đi",
      children: <BookingTourOrder dataProps={bookingPass} />,
    },

    {
      key: "3",
      label: "Tất cả chuyến đi",
      children: <BookingTourOrder dataProps={allBooking} />,
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
