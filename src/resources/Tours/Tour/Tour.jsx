import className from "classnames/bind";
import styles from "./Tour.module.scss";
const cx = className.bind(styles);

import {
  IconAlarm,
  IconCalendarDue,
  IconCheck,
  IconExclamationCircle,
  IconMapPin,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import { useDispatch } from "react-redux";
import { toggleLogin } from "../../../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";

import TourService from "../../../services/TourService";
import BookingTourService from "../../../services/BookingTourService";
import AuthenticationService from "../../../services/AuthenticationService";

import ModalLoginBooking from "./componentsTour/ModalLoginBooking";
import ModalRegisterBooking from "./componentsTour/ModalRegisterBooking";

import useAuth from "../../../hook/useAuth";

function Tour() {
  const { isLogged, role, profile } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { id } = useParams();
  const [numberTicketAdult, setNumberTicketAdult] = useState(1);
  const [numberTicketChild, setNumberTicketChild] = useState(0);

  const [tourDetail, setTourDetail] = useState({});
  const [calendarTour, setCalendarTour] = useState([]);
  const [processTour, setProcessTour] = useState({});

  const [selectedCalendar, setSelectedCalendar] = useState({});

  console.log("selectedCalendar", selectedCalendar);

  // Component Modal ResBooking
  const [isShowModalRegisterBooking, setIsShowModalRegisterBooking] =
    useState(false);

  // Component Modal Login Booking
  const [isShowModalLoginBooking, setIsShowModalLoginBooking] = useState(false);

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

  // Xử lí mảnh lịch nhận về ban đầu để có mảng lịch lớn hơn ngày hiện tại để hiện ra dưới UI
  const handleCalendarShow = useMemo(() => {
    let futureDates = [];
    var currentDate = new Date();

    for (var i = 0; i < calendarTour?.length; i++) {
      var eventStart = new Date(calendarTour[i].startDay);
      if (eventStart >= currentDate) {
        if (futureDates.length === 0) {
          // Đánh dấu phần tử đầu tiên là mặc định được chọn
          calendarTour[i].isSelected = true;
          setSelectedCalendar(calendarTour[i]);
        }
        futureDates.push(calendarTour[i]);

        if (futureDates.length >= 3) {
          break; // Đã có đủ 3 ngày lớn hơn ngày hiện tại
        }
      }
    }

    return futureDates;
  }, [calendarTour]);

  const handleSelectCalendar = (item) => {
    setSelectedCalendar(item);
    calendarTour?.map((calendar) => {
      calendar.isSelected = false;
      if (calendar.id === item.id) {
        calendar.isSelected = !calendar.isSelected;
      }
      return calendar;
    });
  };

  // Tính tổng tiền
  const countMoney = useMemo(() => {
    console.log(selectedCalendar?.priceAdult);
    console.log(selectedCalendar?.priceChild);
    console.log(numberTicketAdult);
    console.log(numberTicketAdult);
    return (
      Number(selectedCalendar?.priceAdult?.replace(/\./g, "")) *
        numberTicketAdult +
      Number(selectedCalendar?.priceChild?.replace(/\./g, "")) *
        numberTicketChild
    );
  }, [selectedCalendar, numberTicketAdult, numberTicketChild]);

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

  // Xử lí sau khi đặc tour thành công
  const handleCloseModalBooking = () => {
    setSelectedCalendar({});
    getTourById();
  };

  const showSuccessSwal = () => {
    const alertInstance = Swal.fire({
      icon: "success",
      title: "<h1>Gửi yêu cầu thành công</h1>",
      html: "<h4>Sẽ liên hệ với quý khách sớm nhất. Xin cảm ơn.</h4",
    });

    setTimeout(() => {
      alertInstance.close();
    }, 2000);
  };

  // Xử lí Modal đăng ký Tour
  const handleResTourByModalBooking = async () => {
    try {
      const bookingTour = await BookingTourService.createBookingTour({
        emailCus: profile?.email,
        idCalendar: selectedCalendar?.id,
        numberTicketAdult: numberTicketAdult,
        numberTicketChild: numberTicketChild,
      });
      if (
        bookingTour &&
        bookingTour.data?.EC === 0 &&
        bookingTour.data?.DT?.id
      ) {
        // bật modal đặc tour thành công
        showSuccessSwal();
        handleCloseModalBooking();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  // Xử lí Modal chưa đăng nhập
  const handleLoginByModalLoginBooking = async (email, password) => {
    const res = await AuthenticationService.loginApi({ email, password });

    if (res?.data?.EC == 0) {
      const dataUser = res.data?.DT?.tokentData;

      dispatch(
        toggleLogin({
          name: dataUser.name,
          email: dataUser.email,
          role: dataUser.role,
        })
      );

      toast.success("Đăng nhập thành công !!!");
    } else {
      toast.error(res.data.EM);
    }
  };

  const handleBookingTour = async () => {
    if (!selectedCalendar.id) {
      return toast.warning("Chọn lịch để đặt Tour ");
    }

    if (isLogged) {
      setIsShowModalRegisterBooking(true);
    } else {
      setIsShowModalLoginBooking(true);
    }
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
                {selectedCalendar?.priceAdult && (
                  <div className={cx("text-warning ", "fs-3", "fw-600px")}>
                    x {selectedCalendar?.priceAdult}
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
                {selectedCalendar?.priceChild && (
                  <div className={cx("text-warning ", "fs-3", "fw-600px")}>
                    x {selectedCalendar?.priceChild}
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

              <div className={cx("d-flex justify-content-between flex-wrap")}>
                <p className={cx("xanhBlueMo", "fs-3")}>
                  <IconExclamationCircle /> Liên hệ để xác nhận chỗ
                </p>

                <p className={cx("fs-3")}>Số chỗ :</p>
              </div>

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
        handleResTourByModalBooking={handleResTourByModalBooking}
        data={{
          nameTour: tourDetail?.name,
          image: tourDetail?.image,
          numberTicketAdult: numberTicketAdult,
          numberTicketChild: numberTicketChild,
          countMoney: countMoney,
          startDay: selectedCalendar?.startDay,
          endDay: selectedCalendar?.endDay,
        }}
        profile={profile}
      />

      <ModalLoginBooking
        isShowModalLoginBooking={isShowModalLoginBooking}
        setIsShowModalLoginBooking={setIsShowModalLoginBooking}
        handleLoginByModalLoginBooking={handleLoginByModalLoginBooking}
      />
    </div>
  );
}

export default Tour;
