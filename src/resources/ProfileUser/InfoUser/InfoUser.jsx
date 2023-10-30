import className from "classnames/bind";
import styles from "./InfoUser.module.scss";
const cx = className.bind(styles);
import { toast } from "react-toastify";

import {
  IconBrandFacebookFilled,
  IconBrandGoogle,
  IconBrandGithubFilled,
} from "@tabler/icons-react";

import useAuth from "../../../hook/useAuth";
import { useState } from "react";

function InfoUser() {
  const { profile } = useAuth();
  const [name, setName] = useState(profile?.name);
  const [email, setEmail] = useState(profile?.email);
  const [phone, setPhone] = useState("");

  const handleUpdateCus = async () => {
    toast.success("Cập nhật thông tin cá nhân thành công");
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <div className={cx("text-center")}>
          <img
            src="https://vapa.vn/wp-content/uploads/2022/12/hinh-nen-dep-hd-001.jpg"
            alt="notFound"
            height={150}
            width={150}
            className={cx("imageInfo")}
          />
          <div>Upload hình mới</div>
        </div>

        <div className={cx("mt-5")}>
          <div className={cx("row my-3   d-flex align-items-center")}>
            <div className={cx("col-4 text-secondary  ", "fw500")}>
              Kết nối Facebook
            </div>
            <div className={cx("col-6")}>
              <button
                className={cx("btn btn-primary fs-4")}
                style={{ width: "120px" }}
              >
                {" "}
                <IconBrandFacebookFilled width={20} height={15} /> | Facebook
              </button>
            </div>
          </div>
          <div className={cx("row my-3   d-flex align-items-center")}>
            <div className={cx("col-4 text-secondary  ", "fw500")}>
              Kết nối Google
            </div>
            <div className={cx("col-6")}>
              <button
                className={cx("btn btn-danger fs-4")}
                style={{ width: "120px" }}
              >
                {" "}
                <IconBrandGoogle width={20} height={15} /> | Google
              </button>
            </div>
          </div>
          <div className={cx("row my-3   d-flex align-items-center")}>
            <div className={cx("col-4 text-secondary  ", "fw500")}>
              Kết nối Github
            </div>
            <div className={cx("col-6")}>
              <button
                className={cx("btn btn-warning fs-4 text-white")}
                style={{ width: "120px" }}
              >
                {" "}
                <IconBrandGithubFilled width={20} height={15} /> | Github
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className={cx("row my-3   d-flex align-items-center")}>
            <div className={cx("col-4 text-secondary  ", "fw500")}>
              Tên đầy đủ
            </div>
            <div className={cx("col-auto flex-grow-1")}>
              <input
                type="text "
                className={cx("form-control fs-4")}
                value={name}
                onChange={(e) => setPhone(e.target.name)}
              />
            </div>
          </div>

          <div className={cx("row my-3  d-flex align-items-center")}>
            <div className={cx("col-4 text-secondary  ", "fw500")}>Email</div>
            <div className={cx("col-auto flex-grow-1")}>
              <input
                type="text "
                className={cx("form-control fs-4")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className={cx("row my-3   d-flex align-items-center")}>
            <div className={cx("col-4 text-secondary  ", "fw500")}>
              Số điện thoại
            </div>
            <div className={cx("col-auto flex-grow-1")}>
              <input
                type="text "
                className={cx("form-control fs-4")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div>
          <button
            className={cx("btn btn-info text-white fs-4 ")}
            onClick={handleUpdateCus}
          >
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoUser;
