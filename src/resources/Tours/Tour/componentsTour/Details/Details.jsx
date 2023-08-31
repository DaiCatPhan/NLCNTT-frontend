import className from "classnames/bind";
import styles from "./Details.module.scss";

const cx = className.bind(styles);

function Details() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("detailsTour")}>
        <h1 className={cx("titleDetails")}>Dịch vụ bao gồm</h1>

        <div className={cx("service")}>
          {/* điểm đến */}
          <div className={cx("info")}>
            <div className={cx("addressInfo")}>
              <p>Điểm đến</p>
            </div>
            <div className={cx("contentInfo")}>
              <p>Miền Bắc</p>
            </div>
          </div>
          <hr />

          {/* địa điểm khởi hành */}
          <div className={cx("info")}>
            <div className={cx("addressInfo")}>
              <p>Địa điểm khởi hành</p>
            </div>
            <div className={cx("contentInfo")}>
              <p>Sân bay Tân Sơn Nhất</p>
            </div>
          </div>
          <hr />

          {/* hãng hàng không */}
          <div className={cx("info")}>
            <div className={cx("addressInfo")}>
              <p>Hãng hàng không</p>
            </div>
            <div className={cx("contentInfo")}>
              <p>Tân Sơn Nhất</p>
            </div>
          </div>
          <hr />

          {/* Quy định đặc và hủy vé  */}
          <div className={cx("info")}>
            <div className={cx("addressInfo")}>
              <p>Quy định đặc và hủy vé </p>
            </div>
            <div className={cx("contentInfo")}>
              <p>Huỷ vé sau khi đăng kí tour sẽ bị phạt 100% tiền cọc.</p>
              <p>Huỷ vé sau khi đăng kí tour sẽ bị phạt 100% tiền cọc.</p>
              <p>Huỷ vé sau khi đăng kí tour sẽ bị phạt 100% tiền cọc.</p>
              <p>Huỷ vé sau khi đăng kí tour sẽ bị phạt 100% tiền cọc.</p>
            </div>
          </div>
          <hr />

          {/*Chi phí bao gồm*/}
          <div className={cx("info")}>
            <div className={cx("addressInfo")}>
              <p>Chi phí bao gồm</p>
            </div>
            <div className={cx("contentInfo")}>
              <div className={cx("d-flex")}>
                <div className={cx("w-50")}>
                  <p>
                    <span className={cx("mr5")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <style></style>
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                      </svg>
                    </span>
                    Bồi dưỡng cho Hướng dẫn viên và tài xế địa phương.
                  </p>
                  <p>
                    <span className={cx("mr5")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <style></style>
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                      </svg>
                    </span>
                    Hướng dẫn viên là người địa phương nói tiếng Anh hoặc tiếng
                    Hoa.
                  </p>
                </div>
                <div className={cx("w-50")}>
                  <p>
                    <span className={cx("mr5")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <style></style>
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                      </svg>
                    </span>
                    Bồi dưỡng cho Hướng dẫn viên và tài xế địa phương.
                  </p>
                  <p>
                    <span className={cx("mr5")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <style></style>
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                      </svg>
                    </span>
                    Hướng dẫn viên là người địa phương nói tiếng Anh hoặc tiếng
                    Hoa.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Details;
