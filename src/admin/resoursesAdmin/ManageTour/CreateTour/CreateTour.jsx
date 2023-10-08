import className from "classnames/bind";
import styles from "./CreateTour.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { IconAsterisk } from "@tabler/icons-react";
import { IconUpload } from "@tabler/icons-react";
import TourService from "../../../../services/TourService";
import { toast } from "react-toastify";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
const mdParser = new MarkdownIt(/* Markdown-it options */);

const cx = className.bind(styles);

function CreateTour() {
  // data
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [priceAdult, setPriceAdult] = useState("");
  const [priceChild, setPriceChild] = useState("");
  const [type, setType] = useState("");
  const [domain, setDomain] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [image, setImage] = useState("");
  const [imageLocal, setImageLocal] = useState("");
  // markdown
  const [desriptionHTML, setDescriptionHTML] = useState("");
  const [desriptionTEXT, setDescriptionTEXT] = useState("");

  function handleEditorChange({ html, text }) {
    setDescriptionHTML(html);
    setDescriptionTEXT(text);
  }

  // console.log("domain", domain);
  // console.log("vehicle", vehicle);
  // ---- end Markdown -----

  const checkValidate = () => {
    if (!name || name.trim() === "") {
      toast.error("Nhập thiếu dữ liệu name !!!!");
      return;
    }
    if (!duration || duration.trim() === "") {
      toast.error("Nhập thiếu dữ liệu duration !!!!");
      return;
    }
    if (!priceAdult || priceAdult.trim() === "") {
      toast.error("Nhập thiếu dữ liệu priceAdult !!!!");
      return;
    }
    if (!priceChild || priceChild.trim() === "") {
      toast.error("Nhập thiếu dữ liệu priceChild !!!!");
      return false;
    }
    if (!type) {
      toast.error("Nhập thiếu dữ liệu type !!!!");
      return false;
    }
    if (!domain) {
      toast.error("Nhập thiếu dữ liệu domain !!!!");
      return false;
    }
    if (!vehicle) {
      toast.error("Nhập thiếu dữ liệu vehicle !!!!");
      return false;
    }
    if (!image) {
      toast.error("Nhập thiếu dữ liệu image !!!!");
      return false;
    }
    if (!desriptionHTML) {
      toast.error("Nhập thiếu dữ liệu desriptionHTML !!!!");
      return false;
    }
    if (!desriptionTEXT) {
      toast.error("Thiếu dữ liệu desriptionTEXT !!!!");
      return false;
    }
    return true;
  };

  const handleImage = (e) => {
    let data = e.target.files;
    let file = data[0];

    if (file) {
      // if (file.type != "text/jpg" || file.type != "text/png") {
      //   toast.error("Chỉ upload ảnh .jpg or .png");
      //   return;
      // }
      const imageUrlLocal = URL.createObjectURL(file);
      setImage(file);
      setImageLocal(imageUrlLocal);
    }
  };

  const handleClose = () => {
    setName("");
    setPriceAdult("");
    setPriceChild("");
    setDuration("");
    setType("");
    setDomain("");
    setVehicle("");
    setImage("");
    setImageLocal("");
    setDescriptionHTML("");
    setDescriptionTEXT("");
  };

  const handleSubmitCreateTour = async () => {
    const checkValue = checkValidate();
    if (!checkValue) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("priceAdult", priceAdult);
    formData.append("priceChild", priceChild);
    formData.append("duration", duration);
    formData.append("type", type);
    formData.append("desriptionHTML", desriptionHTML);
    formData.append("desriptionTEXT", desriptionTEXT);
    formData.append("domain", domain);
    formData.append("vehicle", vehicle);
    formData.append("image", image);

    const res = await TourService.createTour(formData);
    if (res && res.data.EC === 0 && res.data.DT.id) {
      console.log(">> dataTourafte call Api", res);
      toast.success(res.data.EM);
      handleClose();
    } else {
      toast.error(res.data.EM);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        {/* form */}
        <div className={cx("formCreateTour")}>
          <h1 className={cx("title")}>Create Tour</h1>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    spellCheck={false}
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
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
                    value={priceAdult}
                    onChange={(e) => setPriceAdult(e.target.value)}
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
                    spellCheck={false}
                    value={priceChild}
                    onChange={(e) => setPriceChild(e.target.value)}
                  />
                </div>
              </div>
            </Form.Group>

            <Form.Group>
              <div className={cx("row my-5")}>
                <div className={cx("col-lg-4 ", "col-md-6", "col-sm-12")}>
                  <Form.Label>
                    Kiểu tour <IconAsterisk height={10} color="red" />
                  </Form.Label>

                  <Form.Select
                    className={cx("customInput")}
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option className="d-none" value={""}>
                      Type
                    </option>
                    <option value={"noidia"}>Tour nội địa</option>
                    <option value={"nuocngoai"}> Tour nước ngoài</option>
                  </Form.Select>
                </div>
                <div className={cx("col-lg-4 ", "col-md-6", "col-sm-12")}>
                  <Form.Label>
                    Miền tour <IconAsterisk height={10} color="red" />
                  </Form.Label>
                  <Form.Select
                    className={cx("customInput")}
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                  >
                    <option className="d-none" value={""}>
                      Miền
                    </option>
                    <option value={"mienbac"}>Miền Bắc</option>
                    <option value={"mientrung"}> Miền Trung</option>
                    <option value={"miennam"}> Miền Nam</option>
                  </Form.Select>
                </div>
                <div className={cx("col-lg-4 ", "col-md-6", "col-sm-12")}>
                  <Form.Label>
                    Chọn phương tiện <IconAsterisk height={10} color="red" />
                  </Form.Label>
                  <Form.Select
                    className={cx("customInput")}
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                  >
                    <option className="d-none" value={""}>
                      Phương tiện
                    </option>
                    <option value={"xedulich"}>Xe du lịch</option>
                    <option value={"maybay"}> Máy bay</option>
                    <option value={"tau"}> Tàu</option>
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
                  <input
                    onChange={handleImage}
                    className={cx("d-none")}
                    type="file"
                    id="upImg"
                  />
                </div>
                <div className={cx("")}>
                  <img
                    height={250}
                    src={
                      imageLocal ? imageLocal : "src/assets/imageNotFound.jpg"
                    }
                    alt="not found"
                    className={cx("mt-5")}
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
          <div className={cx("formDes")}>
            <MdEditor
              style={{ height: "500px" }}
              renderHTML={(text) => mdParser.render(text)}
              onChange={handleEditorChange}
            />
          </div>
        </div>

        {/* Button */}
        <div className={cx("submitFormBTN")}>
          <button onClick={handleSubmitCreateTour}>Create Tour</button>
        </div>
      </div>
    </div>
  );
}

export default CreateTour;
