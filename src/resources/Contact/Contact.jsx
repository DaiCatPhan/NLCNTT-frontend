import className from "classnames/bind";
import styles from "./Contact.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = className.bind(styles);

function Contact() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("figure")}>
        <img
          className={cx("logo")}
          src="https://vtourist.com.vn/wp-content/uploads/2018/08/bgn-heading-06-1.jpg"
          alt=""
        />
        <div className={cx("titleContact")}>
          <h1>LIÊN HỆ</h1>
          <p></p>
        </div>
      </div>
      <Row className={cx('bodyContent')}>
        <Col xs={5} className={cx("lienhe")}>
          <h1 className={cx("textNav")}>Liên Hệ</h1>
          <h1 className={cx("title")}>Liên Hệ Và Đặc Tour</h1>
          <div className={cx("itemText")}>
            <svg
              className={cx("icon")}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <p>Trụ sở chính: khu vực 10, tổ 4, Hưng Phú , Cái Răng , Hà Nôị</p>
          </div>

          <div className={cx("itemText")}>
            <svg
              className={cx("icon")}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <p>Văn phòng Cần Thơ: số 2, đường 3/2 , Ninh Kiểu , Cần Thơ .</p>
          </div>

          <div className={cx("itemText")}>
            <svg
              className={cx("icon")}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <p>
              Trụ sở chính: 61, tổ 4, Khu Tân Bình, Xuân Mai, Chương Mỹ, Hà Nội.
            </p>
          </div>

          <div className={cx("itemText")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
            <p>0328472724</p>
          </div>

          <div className={cx("itemText")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
            <p>phandaicat12032002@gmail.com</p>
          </div>
        </Col>
        <Col xs={6} className={cx("formLienHe")}>
          <p className={cx("")}>
            Để đóng góp ý kiến về chất lượng dịch vụ, cũng như có những yêu cầu,
            thắc mắc cần được giải đáp, xin vui lòng điền vào Form sau đây và
            gửi đến Gotrip24h.
          </p>

          <form className={cx("form")}>
            <div className={cx("form-group")}>
              <label className={cx("form-label")} htmlFor="email">
                Họ và tên
              </label>
              <input
                className={cx("form-control")}
                type="text"
                id="email"
                // {...register("email", {
                //   required: "Email is required",
                //   pattern: {
                //     value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                //     message: 'Email must be avalid'
                //   }
                // })}
              />
              {/* <span className={cx("form-message")}>{errors.email?.message}</span> */}
            </div>

            {/* Password */}
            <div className={cx("form-group")}>
              <label className={cx("form-label")} htmlFor="password">
                Số điện thoại
              </label>
              <input
                className={cx("form-control")}
                type="text"
                id="password"
                // {...register("password", {
                //   required: "Password is required",
                //   minLength: {
                //     minLength: 5,
                //     message: "Password must be atleast 5 characters long",
                //   },
                // })}
              />
              {/* <span className={cx("form-message")}>{errors.password?.message}</span> */}
            </div>

            <div className={cx("form-group")}>
              <label className={cx("form-label")} htmlFor="email">
                Email
              </label>
              <input
                className={cx("form-control")}
                type="email"
                id="email"
                // {...register("email", {
                //   required: "Email is required",
                //   pattern: {
                //     value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                //     message: 'Email must be avalid'
                //   }
                // })}
              />
              {/* <span className={cx("form-message")}>{errors.email?.message}</span> */}
            </div>

            <div className={cx("form-group")}>
              <label className={cx("form-label")} htmlFor="comment">
                Ghi chú
              </label>
              <textarea
                className={cx("form-control", "comment")}
                type="text"
                id="comment"
                // {...register("email", {
                //   required: "Email is required",
                //   pattern: {
                //     value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                //     message: 'Email must be avalid'
                //   }
                // })}
              />
              {/* <span className={cx("form-message")}>{errors.email?.message}</span> */}
            </div>

            <button className={cx("btn_register")}>Gửi đi</button>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
