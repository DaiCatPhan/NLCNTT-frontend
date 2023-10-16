import className from "classnames/bind";
import styles from "./Tour.module.scss";
import { useEffect, useState } from "react";
import {
  IconAlarm,
  IconCalendarDue,
  IconCheck,
  IconExclamationCircle,
  IconMapPin,
  IconMapPinFilled,
  IconPlus,
} from "@tabler/icons-react";
import { IconMinus } from "@tabler/icons-react";
import { useParams } from "react-router-dom";

import TourService from "../../../services/TourService";

const cx = className.bind(styles);

function Tour() {
  const [numberTicket, setNumberTicket] = useState(0);
  const [tourDetail, setTourDetail] = useState({});
  const [calendarTour, setCalendarTour] = useState([]);
  const [processTour, setProcessTour] = useState({});
  let { id } = useParams();

  const [selectedCalendar, setSelectedCalendar] = useState({});
  console.log("Đã chọn lịch ", selectedCalendar);

  const getTourById = async () => {
    try {
      const res = await TourService.getTourDetailById({ id: id });
      if (res && res.data.EC === 0 && res.data.DT.id) {
        setTourDetail(res?.data?.DT);
        setProcessTour(res?.data?.DT?.ProcessTour);
        setCalendarTour(
          res?.data?.DT?.Calendars?.map((item) => {
            return {
              ...item,
              isSelected: false,
            };
          })
        );
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getTourById();
  }, []);

  const handleBookingTour = () => {
    alert("Booking Tour");
  };

  const handleSelectCalendar = (item) => {
    console.log("handleSelectCalendar", item);
    setSelectedCalendar(item);

    let selectedCal = calendarTour?.map((calendar) => {
      calendar.isSelected = false;
      if (calendar.id === item.id) {
        calendar.isSelected = !calendar.isSelected;
      }
      return calendar;
    });
    setCalendarTour(selectedCal);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <figure className={cx("figure")}>
          <img className={cx("imageTour")} src={tourDetail?.image} alt="1" />
        </figure>
        <h1 className={cx("logoTitle")}>{tourDetail?.name}</h1>

        {/* description */}

        <div className={cx("contactLogo", "text-white", "fs-2")}>
          <div className={cx("info")}>
            <div className={cx("iconTime")}>
              <IconAlarm width={40} height={40} color="white" />
            </div>
            <div className={cx("infoTime")}>
              <div className={cx("infoTimeTitle")}>Thời gian</div>
              <div className={cx("infoTimeDesc")}>4 NGÀY / 3 ĐÊM</div>
            </div>
          </div>

          <div className={cx("info")}>
            <div className={cx("iconTime")}>
              <IconMapPin width={40} height={40} color="white" />
            </div>
            <div className={cx("infoTime")}>
              <div className={cx("infoTimeTitle")}>Điểm đến</div>
              <div className={cx("infoTimeDesc")}>Miền Bắc</div>
            </div>
          </div>

          <div className={cx("info")}>
            <div className={cx("iconTime")}>
              <IconCalendarDue width={40} height={40} color="white" />
            </div>
            <div className={cx("infoTime")}>
              <div className={cx("infoTimeTitle")}>Thời gian khởi hành</div>
              <div className={cx("infoTimeDesc")}>Not specified yet</div>
            </div>
          </div>
          <div className={cx("buyTicket")}>
            <button className={cx("buttonBuyTicket")}>Đặt vé ngay</button>
          </div>
        </div>
      </div>

      <div className={cx("DescTour", "my-5")}>
        <h1 className={cx("titleDescTour")}>{tourDetail?.name}</h1>
        <div className={cx("lineDescTour")}></div>
      </div>

      {/* bgProcessTour */}
      <hr />
      <div className={cx("bgProcessTour")}>
        <div className={cx("detailTour", "row")}>
          <div className={cx("processTour", "col-lg-8 col-md-12 col-sm-12")}>
            <div className={cx("desctiptionTour")}>
              {tourDetail && tourDetail?.descriptionHTML && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: tourDetail.descriptionHTML,
                  }}
                  className={cx("desTour")}
                ></div>
              )}
            </div>
            <div className={cx("desProcessTour")}>
              <h1>Chương trình Tour</h1>
              {processTour && processTour?.descriptionHTML && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: processTour.descriptionHTML,
                  }}
                  className={cx("desTour")}
                ></div>
              )}
            </div>
          </div>

          <div id="calendar" className={cx("calendar", "col-4")}>
            <div className={cx("infoCalendar")}>
              <h1 className={cx("title", "fs-2")}>Lịch khởi hành và giá</h1>
              <p>Chọn ngày khởi hành : </p>
              <div
                className={cx("d-flex flex-wrap justify-content-between my-4")}
              >
                {calendarTour &&
                  calendarTour.map((item) => (
                    <div
                      onClick={() => handleSelectCalendar(item)}
                      key={item.id}
                      className={
                        item.isSelected === true
                          ? cx("rounded", "p-3 ", "date", "active")
                          : cx("rounded", "p-3 ", "date")
                      }
                    >
                      {item.startDay}
                    </div>
                  ))}
              </div>

              <div
                className={cx(
                  " d-flex border my-2  justify-content-between align-items-center p-3 rounded"
                )}
              >
                <div>Người lớn : </div>
                <div className={cx("text-warning ", "fs-3", "fw-600px")}>
                  x 16.490.000
                </div>
                <div>
                  <IconMinus
                    className={cx("poiter")}
                    onClick={() => setNumberTicket(numberTicket - 1)}
                  />
                  <span className="m-4 fs-3">{numberTicket}</span>
                  <IconPlus
                    className={cx("poiter")}
                    onClick={() => setNumberTicket(numberTicket + 1)}
                  />
                </div>
              </div>

              <div
                className={cx(
                  " d-flex border my-2  justify-content-between align-items-center p-3 rounded"
                )}
              >
                <div className={cx("mx-3")}>Trẻ em : </div>
                <div className={cx("text-warning ", "fs-3", "fw-600px")}>
                  x 16.490.000
                </div>
                <div>
                  <IconMinus
                    className={cx("poiter")}
                    onClick={() => setNumberTicket(numberTicket - 1)}
                  />
                  <span className="m-4 fs-3">{numberTicket}</span>
                  <IconPlus
                    className={cx("poiter")}
                    onClick={() => setNumberTicket(numberTicket + 1)}
                  />
                </div>
              </div>

              <p className={cx("xanhBlueMo", "fs-3")}>
                <IconExclamationCircle /> Liên hệ để xác nhận chỗ
              </p>
              <div className={cx("d-flex justify-content-between  ")}>
                <div className={cx("fs-3")}>Tổng cộng : </div>
                <div className={cx("fs-1", "text-warning", "fw-600px")}>
                  82.450.000 vnd
                </div>
              </div>

              <div className={cx("d-flex justify-content-between")}>
                <button className={cx("btnLienHe")}>Liên hệ tư vấn</button>
                <button className={cx("btnYeuCau")} onClick={handleBookingTour}>
                  Yêu cầu đặt
                </button>
              </div>
            </div>
            <div className={cx("advise")}>
              <div className={cx(" p-3  px-5 border row")}>
                <span className=" col-5">
                  <IconCheck color="green" /> Bảo hiểm
                </span>
                <span className=" col-7">
                  <IconCheck color="green" /> Bữa ăn
                </span>
              </div>

              <div className={cx(" p-3  px-5 border row")}>
                <span className=" col-5">
                  <IconCheck color="green" /> Hướng dẫn
                </span>
                <span className=" col-7">
                  <IconCheck color="green" /> Khách Sạn 4*
                </span>
              </div>

              <div className={cx(" p-3  px-5 border row")}>
                <span className=" col-5">
                  <IconCheck color="green" /> Vé máy bay
                </span>
                <span className=" col-7">
                  <IconCheck color="green" /> Vé tham quan
                </span>
              </div>

              <div className={cx(" p-3  px-5 border row")}>
                <span className=" col-5">
                  <IconCheck color="green" /> Visa
                </span>
                <span className=" col-7">
                  <IconCheck color="green" /> Vui Chơi Giải Trí
                </span>
              </div>

              <div className={cx(" p-3  px-5 border row")}>
                <span className=" col-5">
                  <IconCheck color="green" /> Xe đưa đón
                </span>
                <span className=" col-7">
                  <IconCheck color="green" /> Nhà hàng 5*
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tour;
