import className from "classnames/bind";
import styles from "./Tour.module.scss";
const cx = className.bind(styles);

import { useEffect, useState, useMemo } from "react";
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
import moment from "moment";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
// Swal.fire({
//   icon: "success",
//   title: "<h1>Gửi yêu cầu thành công</h1>",
//   html: "<h4>Sẽ liên hệ với quý khách sớm nhất . Xin cảm ơn </h4>",
// });

import TourService from "../../../services/TourService";
import ModalRegisterBooking from "./componentsTour/ModalRegisterBooking";

function Tour() {
  let { id } = useParams();
  const [numberTicketAdult, setNumberTicketAdult] = useState(1);
  const [numberTicketChild, setNumberTicketChild] = useState(0);

  const [tourDetail, setTourDetail] = useState({});
  const [calendarTour, setCalendarTour] = useState([]);
  const [processTour, setProcessTour] = useState({});

  const [selectedCalendar, setSelectedCalendar] = useState({});

  // Component Modal ResBooking
  const [isShowModalRegisterBooking, setIsShowModalRegisterBooking] =
    useState(false);

  // Gọi API lấy dữ liệu
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

  // Lấy dữ liệu để hiển xử lí chọn lịch và active
  const handleSelectCalendar = (item) => {
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

  // Xử lí mảnh lịch nhận về ban đầu để có mảng lịch lớn hơn ngày hiện tại để hiện ra dưới UI
  const handleCalendarShow = useMemo(() => {
    let futureDates = [];
    var currentDate = new Date();

    for (var i = 0; i < calendarTour?.length; i++) {
      var eventStart = new Date(calendarTour[i].startDay);
      if (eventStart >= currentDate) {
        futureDates.push(calendarTour[i]);

        if (futureDates.length >= 3) {
          break; // Đã có đủ 3 ngày lớn hơn ngày hiện tại
        }
      }
    }

    return futureDates;
  }, [calendarTour]);

  // Tính tổng tiền
  const countMoney = useMemo(() => {
    return (
      Number(tourDetail?.priceAdult?.replace(/\./g, "")) * numberTicketAdult +
      Number(tourDetail?.priceChild?.replace(/\./g, "")) * numberTicketChild
    );
  }, [calendarTour, numberTicketAdult, numberTicketChild]);

  // Hàm xử lí ấn giảm vé Trẻ em mà không cho nó nhỏ hơn 0
  const handleSetMinusNumberTicketChild = () => {
    if (numberTicketChild > 0) {
      setNumberTicketChild(numberTicketChild - 1);
    } else {
      setNumberTicketChild(0); // Đặt lại giá trị thành 0
    }
  };

  // Hàm xử lí ấn giảm vé Người lớn mà không cho nó nhỏ hơn 0
  const handleSetMinusNumberTicketAdult = () => {
    if (numberTicketAdult >= 2) {
      setNumberTicketAdult(numberTicketAdult - 1);
    } else {
      setNumberTicketAdult(1); // Đặt lại giá trị thành 0
    }
  };

  // Hàm nhận dữ liệu người dùng đăng ký nhận từ component con ModalRegisterBooking
  const getModalResgisterBooking = (data) => {
    console.log("getModalResgisterBooking", data);
    console.log({ idTOur: id, idCalendar: selectedCalendar.id });

    
  };

  const handleBookingTour = () => {
    if (!selectedCalendar.id) {
      return toast.warning("Chọn lịch để đặt Tour ");
    }
    setIsShowModalRegisterBooking(true);
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
        <div className={cx("detailTour", "row  ")}>
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

          <div
            id="calendar"
            className={cx("calendar", "col-lg-4", "col-md-12")}
          >
            <div className={cx("infoCalendar")}>
              <h1 className={cx("title", "fs-2")}>Lịch khởi hành và giá</h1>
              <p>Chọn ngày khởi hành : </p>
              <div
                className={cx("d-flex flex-wrap justify-content-between my-4")}
              >
                {/* {calendarTour &&
                  calendarTour.map((item) => ( */}

                {handleCalendarShow &&
                  handleCalendarShow.map((item) => (
                    <div
                      onClick={() => handleSelectCalendar(item)}
                      key={item.id}
                      className={
                        item.isSelected === true
                          ? cx("rounded", "p-3", "date", "active")
                          : cx("rounded", "p-3 ", "date")
                      }
                    >
                      {moment(item?.startDay).format("DD-MM-YYYY")}
                    </div>
                  ))}
              </div>

              <div
                className={cx(
                  " d-flex border my-4  justify-content-between align-items-center p-4 rounded flex-wrap"
                )}
              >
                <div>Người lớn : </div>
                {tourDetail?.priceAdult && (
                  <div className={cx("text-warning ", "fs-3", "fw-600px")}>
                    x {tourDetail?.priceAdult}
                  </div>
                )}

                <div>
                  <IconMinus
                    className={cx("poiter")}
                    onClick={handleSetMinusNumberTicketAdult}
                  />
                  <span className="m-4 fs-3">{numberTicketAdult}</span>
                  <IconPlus
                    className={cx("poiter")}
                    onClick={() => setNumberTicketAdult(numberTicketAdult + 1)}
                  />
                </div>
              </div>

              <div
                className={cx(
                  " d-flex border my-4  justify-content-between align-items-center p-4 rounded flex-wrap"
                )}
              >
                <div className={cx("mx-3")}>Trẻ em : </div>
                {tourDetail?.priceChild && (
                  <div className={cx("text-warning ", "fs-3", "fw-600px")}>
                    x {tourDetail?.priceChild}
                  </div>
                )}
                <div>
                  <IconMinus
                    className={cx("poiter")}
                    onClick={handleSetMinusNumberTicketChild}
                  />
                  <span className="m-4 fs-3">{numberTicketChild}</span>
                  <IconPlus
                    className={cx("poiter")}
                    onClick={() => {
                      setNumberTicketChild(numberTicketChild + 1);
                    }}
                  />
                </div>
              </div>

              <p className={cx("xanhBlueMo", "fs-3")}>
                <IconExclamationCircle /> Liên hệ để xác nhận chỗ
              </p>
              <div
                className={cx("d-flex justify-content-between  flex-wrap my-4")}
              >
                <div className={cx("fs-3")}>Tổng cộng : </div>
                <div className={cx("fs-1", "text-warning", "fw-600px")}>
                  {countMoney?.toLocaleString("vi-VN")}
                </div>
              </div>

              <div className={cx("d-flex justify-content-between flex-wrap")}>
                <button className={cx("btnLienHe")}>Liên hệ tư vấn</button>
                <button className={cx("btnYeuCau")} onClick={handleBookingTour}>
                  Yêu cầu đặt
                </button>
              </div>

              <div className={cx("advise", "border")}>
                <div className={cx(" p-3  px-5   row")}>
                  <span className=" col-5">
                    <IconCheck color="green" /> Bảo hiểm
                  </span>
                  <span className=" col-7">
                    <IconCheck color="green" /> Bữa ăn
                  </span>
                </div>

                <div className={cx(" p-3  px-5   row")}>
                  <span className=" col-5">
                    <IconCheck color="green" /> Hướng dẫn
                  </span>
                  <span className=" col-7">
                    <IconCheck color="green" /> Khách Sạn 4*
                  </span>
                </div>

                <div className={cx(" p-3  px-5   row")}>
                  <span className=" col-5">
                    <IconCheck color="green" /> Vé máy bay
                  </span>
                  <span className=" col-7">
                    <IconCheck color="green" /> Vé tham quan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalRegisterBooking
        isShowModalRegisterBooking={isShowModalRegisterBooking}
        setIsShowModalRegisterBooking={setIsShowModalRegisterBooking}
        getModalResgisterBooking={getModalResgisterBooking}
      />
    </div>
  );
}

export default Tour;
