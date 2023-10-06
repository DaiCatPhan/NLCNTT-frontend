import className from "classnames/bind";
import styles from "./Tour.module.scss";
import { useState } from "react";
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

const cx = className.bind(styles);

function Tour() {
  const [numberTicket, setNumberTicket] = useState(0);

  const Tour = {
    name: "Mũi Sa Vĩ - Bình Liêu - Cát Bà - Hạ Long",
    duration: "4 NGÀY / 3 ĐÊM",
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <figure className={cx("figure")}>
          <img
            className={cx("imageTour")}
            src="https://vtourist.com.vn/wp-content/uploads/2022/01/Vinh-Ha-Long_Vtourist.jpg"
            alt="1"
          />
        </figure>
        <h1 className={cx("logoTitle")}>
          Mũi Sa Vĩ - Bình Liêu - Cát Bà - Hạ Long
        </h1>

        {/* description */}

        <div className={cx("contactLogo")}>
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

      <div className={cx("DescTour")}>
        <h1 className={cx("titleDescTour")}>
          MŨI SA VĨ – BÌNH LIÊU – CÁT BÀ – HẠ LONG
        </h1>
        <div className={cx("lineDescTour")}></div>
        <p className={cx("pagDescTour")}>
          Hành trình tham quan Vịnh Hạ Long, là một trong 7 kỳ quan đẹp nhất thế
          giói. Chinh phục "sống lưng Khủng Long" tại Bình Liêu. Chụp hình
          check-in tại Mũi Sa Vĩ – còn gọi là mũi Gót là mũi "cực Đông Bắc Việt
          Nam" và Cột mốc 1305 giữa thiên đường hoa cỏ lau.
        </p>
      </div>

      {/* bgProcessTour */}
      <hr />
      <div className={cx("bgProcessTour")}>
        <div className={cx("processTour")}>
          <div className={cx("tab")}></div>
          <div className={cx("calendar")}>
            <div className={cx("infoCalendar")}>
              <h1 className={cx("title", "fs-2")}>Lịch khởi hành và giá</h1>
              <p>Chọn ngày khởi hành : </p>
              <div className={cx("d-flex justify-content-between my-4")}>
                <p className={cx("rounded", "p-4 ", "date", "active")}>11/10</p>
                <p className={cx("rounded", "p-4 ", "date")}>11/10</p>
                <p className={cx("rounded", "p-4 ", "date")}>11/10</p>
                <p className={cx("rounded", "p-4 ", "date")}>11/10</p>
              </div>
              <div
                className={cx(
                  "my-5 d-flex border p-3 justify-content-between align-items-center"
                )}
              >
                <p>Gía vé : </p>
                <p className={cx("text-warning ", "fs-3", "fw-600px")}>
                  x 16.490.000
                </p>
                <p>
                  <IconMinus
                    className={cx("poiter")}
                    onClick={() => setNumberTicket(numberTicket - 1)}
                  />
                  <span className="m-4 fs-3">{numberTicket}</span>
                  <IconPlus
                    className={cx("poiter")}
                    onClick={() => setNumberTicket(numberTicket + 1)}
                  />
                </p>
              </div>

              <p className={cx("xanhBlueMo", "fs-3")}>
                <IconExclamationCircle /> Liên hệ để xác nhận chỗ
              </p>
              <div className={cx("d-flex justify-content-between my-5")}>
                <p className={cx("fs-3")}>Tổng cộng : </p>
                <h2 className={cx("fs-1", "text-warning", "fw-600px")}>
                  82.450.000 vnd
                </h2>
              </div>

              <div className={cx("d-flex justify-content-between")}>
                <button className={cx("btnLienHe")}>Liên hệ tư vấn</button>
                <button className={cx("btnYeuCau")}>Yêu cầu đặt</button>
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
