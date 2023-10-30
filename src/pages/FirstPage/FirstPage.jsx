import className from "classnames/bind";
import styles from "./FirstPage.module.scss";
import { motion } from "framer-motion";
import { Col, Row } from "antd";

import SlideLogo from "../../components/SlideLogo";
import Card from "../../components/Card";
import CardFlippingGallery from "../../components/CardFlippingGallery";
import { useEffect, useRef, useState } from "react";
const cx = className.bind(styles);

function FirstPage() {
  const imgList = [
    {
      id: "anh1",
      url: "https://images.pexels.com/photos/59516/pexels-photo-59516.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "anh2",
      url: "https://images.pexels.com/photos/2734521/pexels-photo-2734521.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "anh3",
      url: "https://images.pexels.com/photos/3722813/pexels-photo-3722813.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "anh4",
      url: "https://images.pexels.com/photos/3266523/pexels-photo-3266523.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "anh5",
      url: "https://images.pexels.com/photos/2764743/pexels-photo-2764743.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "anh6",
      url: "https://images.pexels.com/photos/3593923/pexels-photo-3593923.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const imgTravel = [
    {
      id: "1",
      title: "FOREST",
      url: "https://img.freepik.com/free-photo/beautiful-aerial-shot-fronalpstock-mountains-switzerland-beautiful-pink-blue-sky_181624-9315.jpg?w=900&t=st=1687123407~exp=1687124007~hmac=15a1b5a4d3a5af66dfba67bdcd577f769f813bf06fc8b5e50f32f6503099bbd8",
      des: "Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consectetuer adipiscing elit.Praesent in mauris eu tortor porttitor accumsan. Lorem ipsumdolor sit amet, consectetuer adipiscing elit. Praesent inmauris eu tortor porttitor accumsan.",
    },
    {
      id: "2",
      title: "MOUNTAIN ",
      url: "https://i.pinimg.com/736x/5f/cc/80/5fcc80e2a77a4ce69467ea7f08e49fea.jpg",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Praesent in mauris eu tortor porttitor accumsan. Lorem ipsumdolor sit amet, consectetuer adipiscing elit. Praesent inmauris eu tortor porttitor accumsan.",
    },
    {
      id: "3",
      title: "BEACH",
      url: "https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=1800&t=st=1687169672~exp=1687170272~hmac=b66f9b9c1e344cbfe6fe2e5f65e94ebb8d418dad2e2af2b892ad9ac60e9eb79c",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Praesent in mauris eu tortor porttitor accumsan. Lorem ipsumdolor sit amet, consectetuer adipiscing elit. Praesent inmauris eu tortor porttitor accumsan.",
    },
    {
      id: "4",
      title: "FOREST",
      url: "https://img.freepik.com/free-photo/pathway-middle-green-leafed-trees-with-sun-shining-through-branches_181624-4539.jpg?w=900&t=st=1687123477~exp=1687124077~hmac=6e8b1735a2cb25be79f248b6a3307a37a15b080dee114565d01704b97d432a80",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Praesent in mauris eu tortor porttitor accumsan. Lorem ipsumdolor sit amet, consectetuer adipiscing elit. Praesent inmauris eu tortor porttitor accumsan.",
    },
    {
      id: "5",
      title: "BEACH",
      url: "https://img.freepik.com/free-photo/beautiful-paradise-island-with-beach-sea_74190-1023.jpg?w=1800&t=st=1687169691~exp=1687170291~hmac=7a65a4e5b2eb374e94e17fd7fb2ab0d1b7b7aaf83078cd62ed5d0a84b66d5beb",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Praesent in mauris eu tortor porttitor accumsan. Lorem ipsumdolor sit amet, consectetuer adipiscing elit. Praesent inmauris eu tortor porttitor accumsan.",
    },
    {
      id: "6",
      title: "BEACH",
      url: "https://img.freepik.com/free-photo/empty-wood-chair-table-outdoor-patio-with-beautiful-tropical-beach-sea_74190-9961.jpg?w=1800&t=st=1687169720~exp=1687170320~hmac=0a77994214a9019510f28af43dab452ada527e96585d6e7f563a09995598851e",
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Praesent in mauris eu tortor porttitor accumsan. Lorem ipsumdolor sit amet, consectetuer adipiscing elit. Praesent inmauris eu tortor porttitor accumsan.",
    },
  ];

  const textRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(cx("active"));
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    const target1 = textRef.current;
    observer.observe(target1);
  }, []);

  useEffect(() => {
    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(cx("active"));
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    const videoRef1 = videoRef.current;
    observer.observe(videoRef1);
  }, []);

  return (
    <div className={cx("wrapper")}>
      {/* Logo */}
      <div className={cx("nav")}>
        <SlideLogo />
        <div className={cx("notification")}>
          <h2>24/08/2023</h2>
          <h1>
            SAIGONTOURIST GROUP & VIETNAM AIRLINES ĐỒNG TỔ CHỨC HAI SỰ KIỆN
            QUẢNG BÁ ĐIỂM ĐẾN VIỆT NAM TẠI NHẬT BẢN
          </h1>
          <p>
            Tổng Công ty Du lịch Sài Gòn (Saigontourist Group) phối hợp Tổng
            Công ty Hàng không Việt Nam (Vietnam Airlines), Hàng không Nhật Bản
            (ANA) đồng tổ ...
          </p>
        </div>
      </div>

      {/* Container */}
      <div className={cx("main")}>
        <section id="statement" className={cx("statement")}>
          <div className={cx("titleStatement")}>
            <h1 className={cx("headingStatement")}>
              <span className={cx("sp1")}>Khác Biệt Mang Tên</span>{" "}
              <span className={cx("sp2")}>VTOURIST</span>
            </h1>
          </div>

          <div className={cx("description_Statement")}>
            <span>
              Chúng tôi cam kết mang đến những chuyến{" "}
              <b>du lịch Mỹ khác biệt</b>, đẳng cấp, độc đáo mà{" "}
              <p>chỉ có tại VTourist</p>.
            </span>
          </div>

          <div className={cx("cardsStatement")}>
            <div className={cx("itemCard_Statement")}>
              <CardFlippingGallery url={"/src/assets/firstpages/anh1.jpg"} />
            </div>
            <div className={cx("itemCard_Statement")}>
              <CardFlippingGallery url={"/src/assets/firstpages/anh2.jpg"} />
            </div>
            <div className={cx("itemCard_Statement")}>
              <CardFlippingGallery url={"/src/assets/firstpages/anh3.jpg"} />
            </div>
          </div>
        </section>

        <section id="introduction" className={cx("introduction")}>
          <motion.div
            initial={{ opacity: 0, scale: 0, translateY: -80 }}
            whileInView={{ opacity: 1, scale: 1, y: 80 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className={cx("intro")}>
              <h3 className={cx("introduction-first")}>EXPLORE OUR TOURS</h3>
              <h1 className={cx("introduction-second")}>
                New and Most Popular Tours
              </h1>
              <div className={cx("lineIntro")}></div>
            </div>
          </motion.div>
        </section>

        <section id="paragraph" className={cx("paragraph")}>
          <div ref={textRef} className={cx("textParagraph")}>
            <p className={cx("text")}>
              Trường Trung cấp Du lịch & Khách sạn Saigontourist , là cơ sở đào
              tạo nghề du lịch uy tín hàng đầu tại Việt Nam, không chỉ đào tạo
              cho hệ thống Saigontourist Group mà còn cho cả nguồn nhân lực du
              lịch Tp. HCM và cả nước, thông qua các chương trình đào tạo tại
              Trường, theo nhu cầu của các doanh nghiệp, các địa phương...
              Trường luôn liên kết với các khách sạn 4-5 sao trong hệ thống
            </p>
            <p className={cx("text")}>
              Trường Trung cấp Du lịch & Khách sạn Saigontourist , là cơ sở đào
              tạo nghề du lịch uy tín hàng đầu tại Việt Nam, không chỉ đào tạo
              cho hệ thống Saigontourist Group mà còn cho cả nguồn nhân lực du
              lịch Tp. HCM và cả nước, thông qua các chương trình đào tạo tại
              Trường, theo nhu cầu của các doanh nghiệp, các địa phương...
              Trường luôn liên kết với các khách sạn 4-5 sao trong hệ thống
            </p>

            <button className={cx("button", "btn")}>Xem thêm</button>
          </div>
          <div>
            <video
              ref={videoRef}
              className={cx("video")}
              width="750"
              height="500"
              controls
            >
              <source src="https://youtu.be/go_9xztCLp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section id="cardList" className={cx("cardList")}>
          <div className={cx("girdCardList")}>
            {imgTravel.map((img, index) => (
              <Card key={img.id} data={img} />
            ))}
          </div>
        </section>

        <section id="memories" className={cx("memories")}>
          <div className={cx("bgMemories")}>
            <div className={cx("content")}>
              <h1>
                NHỮNG GÌ ĐỘNG LẠI{" "}
                <span className={cx("text-danger")}>SAU CHUYẾN ĐI</span>
              </h1>
              <p>
                Phản hồi của quý khách hàng là sự đảm bảo về
                <b> chất lượng dịch vụ</b>, <b>đẳng cấp </b>và <b>uy tín</b> của{" "}
                <b>VTourist</b>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                pariatur assumenda ab fuga non similique molestiae iste expedita
                qui ullam ex tenetur, sunt exercitationem perferendis, quod,
                voluptatibus accusantium facilis laudantium!
              </p>
            </div>
          </div>
        </section>

        <section id="remember" className={cx("remember")}>
           
        </section>
      </div>
    </div>
  );
}

export default FirstPage;
