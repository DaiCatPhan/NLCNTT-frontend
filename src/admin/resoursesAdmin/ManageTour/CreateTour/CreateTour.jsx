import className from "classnames/bind";
import styles from "./CreateTour.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IconAsterisk } from "@tabler/icons-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const cx = className.bind(styles);

function CreateTour() {
  const [value, setValue] = useState("");
  const reactQuillRef = useRef();
  console.log(">>>", value);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        {/* form */}
        <div className={cx("formCrateTour")}>
          <h1 className={cx("title")}>Create Tour</h1>
          <Form>
            <Form.Group>
              <div className={cx("row my-5")}>
                <div className={cx("col-4 ")}>
                  <Form.Label className={cx("text-primary")}>
                    Nhập tên Tour <IconAsterisk height={10} color="red" />
                  </Form.Label>
                  <Form.Control
                    placeholder="Enter name tour"
                    className={cx("customInput")}
                  />
                </div>
                <div className={cx("col-4 ")}>
                  <Form.Label>
                    Nhập Giá Tour <IconAsterisk height={10} color="red" />
                    <span className={cx("fs-4", "text-secondary")}>
                      ( ex: 4.000.000 )
                    </span>
                  </Form.Label>
                  <Form.Control
                    placeholder="Enter giá tour"
                    className={cx("customInput")}
                  />
                </div>
                <div className={cx("col-4 ")}>
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
                  </Form.Select>
                </div>
              </div>
            </Form.Group>
          </Form>
        </div>
        {/* Description */}
        <div className={cx("description")}>
          <h1>Mô tả 1 vài thông tin Tour</h1>
          <div className={cx("formDes")}>
            <div className={cx("quill")}>
              <ReactQuill
                ref={reactQuillRef}
                theme="snow"
                modules={{
                  toolbar: {
                    container: [
                      [{ header: "1" }, { header: "2" }, { font: [] }],
                      [{ size: [] }],
                      ["bold", "italic", "underline", "strike", "blockquote"],
                      [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                      ],
                      ["link", "image", "video"],
                      ["code-block"],
                      ["clean"],
                    ],
                  },
                  clipboard: {
                    matchVisual: false,
                  },
                }}
                formats={[
                  "header",
                  "font",
                  "size",
                  "bold",
                  "italic",
                  "underline",
                  "strike",
                  "blockquote",
                  "list",
                  "bullet",
                  "indent",
                  "link",
                  "image",
                  "video",
                  "code-block",
                ]}
                value={value}
                onChange={setValue}
                style={{
                  height: "200",
                }}
              />
            </div>
            <div className={cx("textQuill")}>
              <ReactQuill value={value} readOnly={true} theme={"bubble"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTour;
