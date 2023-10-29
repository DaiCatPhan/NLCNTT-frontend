import className from "classnames/bind";
import styles from "./BookingTourOrder.module.scss";
const cx = className.bind(styles);
import moment from "moment";

function BookingTourOrder(props) {
  const { dataProps } = props;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>



        {dataProps &&
          dataProps.length > 0 ?
          (dataProps.map((data, index) => (
            <div
              key={data.id}
              className={cx("row border border-secondary my-4")}
            >
              <div
                className={cx(
                  " p-0 col-lg-8  d-flex  align-items-center ",
                  "borderRight"
                )}
              >
                <img
                  height={100}
                  width={100}
                  src={data?.Calendar?.Tour?.image}
                  alt="notFound"
                />
                <div className={cx("mx-3")}>
                  <div>{data?.Calendar?.Tour?.name}</div>
                  <div className={cx("mt-2")}>
                    <div className={cx("d-flex justify-content-between")}>
                      <p>
                        Giá vé người lớn :{" "}
                        {data?.Calendar?.priceAdult.replace(
                          /(\d)(?=(\d{3})+$)/g,
                          "$1."
                        )} vnd
                      </p>
                      <p>
                        Giá vé trẻ em :{" "}
                        {data?.Calendar?.priceChild.replace(
                          /(\d)(?=(\d{3})+$)/g,
                          "$1."
                        )} vnd
                      </p>
                    </div>
                    <div className={cx("d-flex justify-content-between")}>
                      <p>Số vé người lớn : {data?.numberTicketAdult}</p>
                      <p>Số vé trẻ em : {data?.numberTicketChild} </p>
                      <p>Tổng tiền : {data?.money.replace(
                          /(\d)(?=(\d{3})+$)/g,
                          "$1."
                        )} vnd </p>
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
              </div>
            </div>
          ))) : (
            <div>Chưa có lịch trình nào !!!</div>
          )
        }
      </div>
    </div>
  );
}

export default BookingTourOrder;
