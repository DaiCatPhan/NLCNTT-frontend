import className from "classnames/bind";
import styles from "./BookingTourOrder.module.scss";
const cx = className.bind(styles);
import moment from "moment";
import { IconX } from "@tabler/icons-react";
import ModalDeleteBookingTour from "../ModalDeleteBookingTour";
import { useState } from "react";

function BookingTourOrder(props) {
  const { dataProps, deleted, fetchDataOrder } = props;
  const [isShowModalDeleteBooking, setIsShowModalDeleteBooking] =
    useState(false);
  const [dataDelete, setDataDelete] = useState({});

  const handleDeleteOrder = (data) => {
    setDataDelete(data);
    setIsShowModalDeleteBooking(true);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        {dataProps && dataProps.length > 0 ? (
          dataProps.map((data, index) => (
            <div
              key={data.id}
              className={cx(
                "row border border-secondary my-4 position-relative"
              )}
            >
              <div
                className={cx(
                  " p-0 col-lg-7  d-flex  align-items-center ",
                  "borderRight"
                )}
              >
                <img
                  height={100}
                  width={100}
                  src={data?.Calendar?.Tour?.image}
                  alt="notFound"
                />
                <div className={cx("mx-3  w-100")}>
                  <div>{data?.Calendar?.Tour?.name}</div>
                  <div className={cx("mt-2")}>
                    <div className={cx("d-flex justify-content-between ")}>
                      <p>
                        Giá vé người lớn :{" "}
                        {data?.Calendar?.priceAdult.replace(
                          /(\d)(?=(\d{3})+$)/g,
                          "$1."
                        )}{" "}
                        vnd
                      </p>
                      <p>
                        Giá vé trẻ em :{" "}
                        {data?.Calendar?.priceChild.replace(
                          /(\d)(?=(\d{3})+$)/g,
                          "$1."
                        )}{" "}
                        vnd
                      </p>
                    </div>
                    <div className={cx("d-flex justify-content-between")}>
                      <p>Số vé người lớn : {data?.numberTicketAdult}</p>
                      <p>Số vé trẻ em : {data?.numberTicketChild} </p>
                      <p>
                        Tổng tiền :{" "}
                        {data?.money.replace(/(\d)(?=(\d{3})+$)/g, "$1.")} vnd{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={cx(
                  "col-lg-3 d-flex flex-column justify-content-between  mx-5"
                )}
              >
                <div>
                  Ngày đặt vé : {moment(data?.createdAt).format("DD-MM-YYYY")}
                </div>

                <div>
                  Tổng thời gian tour : {data?.Calendar?.Tour?.duration}
                </div>

                <div>
                  Ngày bắt đầu tour :{" "}
                  {moment(data?.Calendar?.startDay).format("DD-MM-YYYY")}
                </div>
                <div>
                  Ngày kết thúc tour :{" "}
                  {moment(data?.Calendar?.endDay).format("DD-MM-YYYY")}
                </div>

                {deleted && (
                  <IconX
                    className={cx("btnDelete")}
                    onClick={() => handleDeleteOrder(data)}
                  />
                )}
              </div>

              <div
                className={cx(
                  "col   d-flex flex-column justify-content-center align-items-center",
                  "borderLeft"
                )}
              >
                {data?.status === "0" ? (
                  <div className={cx("text-warning")}>
                    <b>Chưa duyệt</b>
                  </div>
                ) : (
                  <div className={cx("text-primary")}>
                    <b>Đã duyệt</b>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>Chưa có lịch trình nào !!!</div>
        )}
      </div>

      <ModalDeleteBookingTour
        isShowModalDeleteBooking={isShowModalDeleteBooking}
        setIsShowModalDeleteBooking={setIsShowModalDeleteBooking}
        dataDelete={dataDelete}
        setDataDelete={setDataDelete}
        fetchDataOrder={fetchDataOrder}
      />
    </div>
  );
}

export default BookingTourOrder;
