import className from "classnames/bind";
import styles from "./Tour.module.scss";
import Tab from "./componentsTour/Tab";
import Item from "./componentsTour/Item";
import { useState } from "react";

const cx = className.bind(styles);

function Tour() { 

  const Tour = {
    name: 'Mũi Sa Vĩ - Bình Liêu - Cát Bà - Hạ Long',
    duration: '4 NGÀY / 3 ĐÊM',

  }

  const items = [
    {
      key: "1",
      label: "Chương trình Tour",
      children: <Item />,
    },
    {
      key: "2",
      label: "Qui định",
      children: <Item />,
    },
    {
      key: "3",
      label: "Bảng giá chi tiết",
      children: <Item />,
    },
    {
      key: "4",
      label: "Nhận xét",
      children: <Item />,
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <article>
          <figure className={cx("figure")}>
            <img
              className={cx("imageTour")}
              src="https://vtourist.com.vn/wp-content/uploads/2022/01/Vinh-Ha-Long_Vtourist.jpg"
              alt="1"
            />
          </figure>
        </article>
        <h1 className={cx("logoTitle")}>
          Mũi Sa Vĩ - Bình Liêu - Cát Bà - Hạ Long
        </h1>

        <div className={cx("contactLogo")}>
          <div className={cx("info")}>
            <div className={cx("iconTime")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                {" "}
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
            </div>
            <div className={cx("infoTime")}>
              <div className={cx("infoTimeTitle")}>Thời gian</div>
              <div className={cx("infoTimeDesc")}>4 NGÀY / 3 ĐÊM</div>
            </div>
          </div>

          <div className={cx("info")}>
            <div className={cx("iconTime")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                {" "}
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
            </div>
            <div className={cx("infoTime")}>
              <div className={cx("infoTimeTitle")}>Điểm đến</div>
              <div className={cx("infoTimeDesc")}>Miền Bắc</div>
            </div>
          </div>

          <div className={cx("info")}>
            <div className={cx("iconTime")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                {" "}
                <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
              </svg>
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
        <h2>4 NGÀY 3 ĐÊM</h2>
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
      <hr />

      <div className={cx("TabTour")}>
        <Tab items={items} />
      </div>
    </div>
  );
}

export default Tour;
