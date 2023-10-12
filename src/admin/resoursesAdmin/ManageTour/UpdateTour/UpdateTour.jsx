import className from "classnames/bind";
import styles from "./UpdateTour.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IconAsterisk } from "@tabler/icons-react";
import { IconUpload } from "@tabler/icons-react";

const cx = className.bind(styles);

function UpdateTour() {
  // data
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [type, setType] = useState("");
  const [domain, setDomain] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [image, setImage] = useState("");
  const [imageLocal, setImageLocal] = useState("");
  const [desription, setDescription] = useState("");

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        {/* form */}
        <div className={cx("formCreateTour")}>
          <h1 className={cx("title")}>Update Tour</h1>
          <Form>
            <Form.Group>
              <div className={cx("row my-5")}>
                <div className={cx("col-lg-6 ", "col-md-12")}>
                  <Form.Label className={cx("")}>
                    Nhập tên Tour <IconAsterisk height={10} color="red" />
                  </Form.Label>
                  <Form.Control
                    placeholder="Enter name tour"
                    className={cx("customInput")}
                    spellCheck={false}
                  />
                </div>

                <div className={cx("col-lg-6 ", "col-md-12")}>
                  <Form.Label>
                    Tổng thời gian Tour
                    <IconAsterisk height={10} color="red" />
                    <span className={cx("fs-4", "text-secondary")}>
                      ( ex : 4 ngày 2 đêm )
                    </span>
                  </Form.Label>
                  <Form.Control
                    placeholder="Enter tổng thời gian tour"
                    className={cx("customInput")}
                  />
                </div>
              </div>
            </Form.Group>

            <Form.Group>
              <div className={cx("row my-5")}>
                <div className={cx("col-lg-6 ", "col-md-12")}>
                  <Form.Label className={cx("")}>
                    Giá Tour người lớn <IconAsterisk height={10} color="red" />
                  </Form.Label>
                  <Form.Control
                    placeholder="Giá Tour người lớn"
                    className={cx("customInput")}
                    spellCheck={false}
                  />
                </div>

                <div className={cx("col-lg-6 ", "col-md-12")}>
                  <Form.Label>
                    Gía Tour trẻ em
                    <IconAsterisk height={10} color="red" />
                    <span className={cx("fs-4", "text-secondary")}></span>
                  </Form.Label>
                  <Form.Control
                    placeholder="Giá Tour trẻ em"
                    className={cx("customInput")}
                  />
                </div>
              </div>
            </Form.Group>

            <Form.Group>
              <div className={cx("row my-5")}>
                <div className={cx("col-4 ")}>
                  <Form.Label htmlFor="disabledSelect">
                    Kiểu tour <IconAsterisk height={10} color="red" />
                  </Form.Label>
                  <Form.Select
                    id="disabledSelect"
                    className={cx("customInput")}
                  >
                    <option>Tour nội địa</option>
                    <option> Tour nước ngoài</option>
                  </Form.Select>
                </div>
                <div className={cx("col-4 ")}>
                  <Form.Label htmlFor="disabledSelect">
                    Miền tour <IconAsterisk height={10} color="red" />
                  </Form.Label>
                  <Form.Select
                    id="disabledSelect"
                    className={cx("customInput")}
                  >
                    <option>Miền Bắc</option>
                    <option> Miền Trung</option>
                    <option> Miền Nam</option>
                  </Form.Select>
                </div>
                <div className={cx("col-4 ")}>
                  <Form.Label htmlFor="disabledSelect">
                    Chọn phương tiện <IconAsterisk height={10} color="red" />
                  </Form.Label>
                  <Form.Select
                    id="disabledSelect"
                    className={cx("customInput")}
                  >
                    <option>Xe du lịch</option>
                    <option> Máy bay</option>
                    <option> Tàu</option>
                  </Form.Select>
                </div>
              </div>
            </Form.Group>

            <Form.Group>
              <div
                className={cx(
                  "d-flex justify-content-center align-items-center my-5"
                )}
              >
                <div className={cx("mx-5")}>
                  <Form.Label>
                    Chọn ảnh Tour <IconAsterisk height={10} color="red" />
                  </Form.Label>
                  <label htmlFor="upImg" className={cx("selectImage")}>
                    <IconUpload
                      className={cx("IconUpImg")}
                      color="green"
                      height={30}
                      width={30}
                    />
                  </label>
                  <input className={cx("d-none")} type="file" id="upImg" />
                </div>
                <div className={cx("")}>
                  <img
                    height={250}
                    src="https://demoda.vn/wp-content/uploads/2022/01/hinh-nen-desktop-1-800x533.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Form.Group>
          </Form>
        </div>
        {/* Description */}
        <div className={cx("description")}>
          <h3 className={cx("my-4")}>
            Mô tả 1 vài thông tin Tour <IconAsterisk height={10} color="red" />
          </h3>
          <div className={cx("formDes")}></div>
        </div>
      </div>
    </div>
  );
}

export default UpdateTour;
