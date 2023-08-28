import className from "classnames/bind";
import styles from "./FirstPage.module.scss";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import SlideLogo from "../../components/SlideLogo";

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

  return (
    <div className={cx("wrapper")}>
      {/* Logo */}
      <div className={cx("nav")}>
        <SlideLogo />
      </div>

      {/* Container */}
      <div className={cx("main")}>
        <Row>
          <div className={cx("introduction")}>
            <h3 className={cx("introduction-first")}>EXPLORE OUR TOURS</h3>
            <h1 className={cx("introduction-second")}>
              New and Most Popular Tours
            </h1>
          </div>
        </Row>

        <Row className={cx("paragraph")}>
          <Col xs={7}>
            <p className={cx("text")}>
              Trường Trung cấp Du lịch & Khách sạn Saigontourist (STHC), là cơ
              sở đào tạo nghề du lịch uy tín hàng đầu tại Việt Nam, không chỉ
              đào tạo cho hệ thống Saigontourist Group mà còn cho cả nguồn nhân
              lực du lịch Tp. HCM và cả nước, thông qua các chương trình đào tạo
              tại Trường, theo nhu cầu của các doanh nghiệp, các địa phương...
              Trường luôn liên kết với các khách sạn 4-5 sao trong hệ thống
              Saigontourist Group và các đối tác nhằm tạo điều kiện thuận lợi
              nhất cho các học viên nâng cao chất lượng thực hành tại môi trường
              thực tế theo tiêu chuẩn ngành. Bên cạnh đó, mở rộng quan hệ hợp
              tác với các đối tác uy tín chuyên ngành đào tạo du lịch hàng đầu
              thế giới.
            </p>

            <button className={cx("button", "btn")}>Xem thêm</button>
          </Col>
          <Col>
            <p className={cx("text")}>
              Trường Trung cấp Du lịch & Khách sạn Saigontourist (STHC), là cơ
              sở đào tạo nghề du lịch uy tín hàng đầu tại Việt Nam, không chỉ
              đào tạo cho hệ thống Saigontourist Group mà còn cho cả nguồn nhân
              lực du lịch Tp. HCM và cả nước, thông qua các chương trình đào tạo
              tại Trường, theo nhu cầu của các doanh nghiệp, các địa phương...
              Trường luôn liên kết với các khách sạn 4-5 sao trong hệ thống
              Saigontourist Group và các đối tác nhằm tạo điều kiện thuận lợi
              nhất cho các học viên nâng cao chất lượng thực hành tại môi trường
              thực tế theo tiêu chuẩn ngành. Bên cạnh đó, mở rộng quan hệ hợp
              tác với các đối tác uy tín chuyên ngành đào tạo du lịch hàng đầu
              thế giới.
            </p>
          </Col>
        </Row>

        <span className={cx("background")}>
          <span className={cx("centering")}>
            <section className={cx("articles")}>
              <article>
                <figure>
                  <img
                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-
                                    clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=900&t=
                                    st=1687123388~exp=1687123988~hmac=f3410d0a5c2f20aec66c7d763c789bf0aae9c
                                    5026366fe41ae7d18e05e7e406b"
                    alt="Preview"
                    title="Preview"
                  />
                </figure>
                <div className={cx("article-preview")}>
                  <h2>My Blog 1</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Praesent in mauris eu tortor porttitor accumsan. Lorem ipsum
                    dolor sit amet, consectetuer adipiscing elit. Praesent in
                    mauris eu tortor porttitor accumsan.
                    <a href="#" class="read-more" title="Read More">
                      Read more
                    </a>
                  </p>
                </div>
              </article>

              <article>
                <figure>
                  <img
                    src="https://img.freepik.com/free-photo/beautiful-aerial-shot-fronalpstock-
                                     mountains-switzerland-beautiful-pink-blue-sky_181624-9315.jpg?w=900&t=
                                     st=1687123407~exp=1687124007~hmac=15a1b5a4d3a5af66dfba67bdcd577f769f813
                                     bf06fc8b5e50f32f6503099bbd8"
                    alt="Preview"
                    title="Preview"
                  />
                </figure>
                <div class="article-preview">
                  <h2>My Blog 2</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Praesent in mauris eu tortor porttitor accumsan. Lorem ipsum
                    dolor sit amet, consectetuer adipiscing elit. Praesent in
                    mauris eu tortor porttitor accumsan.
                    <a href="#" class="read-more" title="Read More">
                      Read more
                    </a>
                  </p>
                </div>
              </article>

              <article>
                <figure>
                  <img
                    src="https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=1800&t=st=1687169672~exp=1687170272~hmac=b66f9b9c1e344cbfe6fe2e5f65e94ebb8d418dad2e2af2b892ad9ac60e9eb79c"
                    alt="Preview"
                    title="Preview"
                  />
                </figure>
                <div class="article-preview">
                  <h2>My Blog 3</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Praesent in mauris eu tortor porttitor accumsan. Lorem ipsum
                    dolor sit amet, consectetuer adipiscing elit. Praesent in
                    mauris eu tortor porttitor accumsan.
                    <a href="#" class="read-more">
                      Read more
                    </a>
                  </p>
                </div>
              </article>

              <article>
                <figure>
                  <img
                    src="https://img.freepik.com/free-photo/pathway-middle-green-leafed-trees-with-sun-shining-through-branches_181624-4539.jpg?w=900&t=st=1687123477~exp=1687124077~hmac=6e8b1735a2cb25be79f248b6a3307a37a15b080dee114565d01704b97d432a80"
                    alt="Preview"
                    title="Preview"
                  />
                </figure>
                <div class="article-preview">
                  <h2>My Blog 4</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Praesent in mauris eu tortor porttitor accumsan. Lorem ipsum
                    dolor sit amet, consectetuer adipiscing elit. Praesent in
                    mauris eu tortor porttitor accumsan.
                    <a href="#" class="read-more">
                      Read more
                    </a>
                  </p>
                </div>
              </article>

              <article>
                <figure>
                  <img
                    src="https://img.freepik.com/free-photo/beautiful-paradise-island-with-beach-sea_74190-1023.jpg?w=1800&t=st=1687169691~exp=1687170291~hmac=7a65a4e5b2eb374e94e17fd7fb2ab0d1b7b7aaf83078cd62ed5d0a84b66d5beb"
                    alt="Preview"
                    title="Preview"
                  />
                </figure>
                <div class="article-preview">
                  <h2>My Blog 5</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Praesent in mauris eu tortor porttitor accumsan. Lorem ipsum
                    dolor sit amet, consectetuer adipiscing elit. Praesent in
                    mauris eu tortor porttitor accumsan.
                    <a href="#" class="read-more">
                      Read more
                    </a>
                  </p>
                </div>
              </article>

              <article>
                <figure>
                  <img
                    src="https://img.freepik.com/free-photo/empty-wood-chair-table-outdoor-patio-with-beautiful-tropical-beach-sea_74190-9961.jpg?w=1800&t=st=1687169720~exp=1687170320~hmac=0a77994214a9019510f28af43dab452ada527e96585d6e7f563a09995598851e"
                    alt="Preview"
                    title="Preview"
                  />
                </figure>
                <div class="article-preview">
                  <h2>My Blog 6</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Praesent in mauris eu tortor porttitor accumsan. Lorem ipsum
                    dolor sit amet, consectetuer adipiscing elit. Praesent in
                    mauris eu tortor porttitor accumsan.
                    <a href="#" class="read-more">
                      Read more
                    </a>
                  </p>
                </div>
              </article>

              <article>
                <figure>
                  <img
                    src="https://img.freepik.com/free-photo/view-mountains-landscape-huesca_1398-5217.jpg?w=2000&t=st=1687169991~exp=1687170591~hmac=aa445998f8b6570cab3abc9d68853ab80ba944475fcbc05c70c6061f967ab9f7"
                    alt="Preview"
                    title="Preview"
                  />
                </figure>
                <div class="article-preview">
                  <h2>My Blog 7</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Praesent in mauris eu tortor porttitor accumsan. Lorem ipsum
                    dolor sit amet, consectetuer adipiscing elit. Praesent in
                    mauris eu tortor porttitor accumsan.
                    <a href="#" class="read-more">
                      Read more
                    </a>
                  </p>
                </div>
              </article>

              <article>
                <figure>
                  <img
                    src="https://img.freepik.com/free-photo/beautiful-shot-snowy-hill-surrounded-by-mountains-with-light-pink-sky_181624-4102.jpg?w=2000&t=st=1687169963~exp=1687170563~hmac=b811dc16315ec7776b847588539208c1d57e43df80f7319aeb9b55ed7322784b"
                    alt="Preview"
                    title="Preview"
                  />
                </figure>
                <div class="article-preview">
                  <h2>My Blog 8</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Praesent in mauris eu tortor porttitor accumsan. Lorem ipsum
                    dolor sit amet, consectetuer adipiscing elit. Praesent in
                    mauris eu tortor porttitor accumsan.
                    <a href="#" class="read-more">
                      Read more
                    </a>
                  </p>
                </div>
              </article>

              <article>
                <figure>
                  <img
                    src="https://img.freepik.com/free-photo/beautiful_1203-2633.jpg?w=2000&t=st=1687169925~exp=1687170525~hmac=4e1fdddf8ca048eaa100d431639d165f115cd16cea95feff591fbecdc3b28d4c"
                    alt="Preview"
                    title="Preview"
                  />
                </figure>
                <div class="article-preview">
                  <h2>My Blog 9</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Praesent in mauris eu tortor porttitor accumsan. Lorem ipsum
                    dolor sit amet, consectetuer adipiscing elit. Praesent in
                    mauris eu tortor porttitor accumsan.
                    <a href="#" class="read-more">
                      Read more
                    </a>
                  </p>
                </div>
              </article>
            </section>
          </span>
        </span>
      </div>
    </div>
  );
}

export default FirstPage;
