import className from "classnames/bind";
import styles from "./UpdateTour.module.scss";
const cx = className.bind(styles);
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IconAsterisk } from "@tabler/icons-react";
import { IconUpload } from "@tabler/icons-react";

import { Spin } from "antd";
import { toast } from "react-toastify";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
const mdParser = new MarkdownIt(/* Markdown-it options */);

import TourService from "../../../../services/TourService";
import { IconArrowNarrowLeft } from "@tabler/icons-react";

function UpdateTour() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleEditorChange({ html, text }) {
    setDescriptionHTML(html);
    setDescriptionTEXT(text);
  }

  // data
  const [id, setId] = useState(searchParams.get("idTour"));
  const [name, setName] = useState("");
  const [priceAdult, setPriceAdult] = useState("");
  const [priceChild, setPriceChild] = useState("");
  const [duration, setDuration] = useState("");
  const [type, setType] = useState("");
  const [domain, setDomain] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [image, setImage] = useState("");
  const [imageLocal, setImageLocal] = useState("");
  const [descriptionHTML, setDescriptionHTML] = useState("");
  const [descriptionTEXT, setDescriptionTEXT] = useState("");
  const [isShowSpin, setIsShowSpin] = useState(false);

  const fetchData = async () => {
    const res = await TourService.getTour({ id: id });
    if (res && res.data.EC === 0 && res.data.DT.id) {
      setName(res.data.DT.name);
      setPriceAdult(res.data.DT.priceAdult);
      setPriceChild(res.data.DT.priceChild);
      setDuration(res.data.DT.duration);
      setType(res.data.DT.type);
      setDomain(res.data.DT.domain);
      setVehicle(res.data.DT.vehicle);
      setImageLocal(res.data.DT.image);
      setDescriptionHTML(res.data.DT.descriptionHTML);
      setDescriptionTEXT(res.data.DT.descriptionTEXT);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleImage = (e) => {
    let data = e.target.files;
    let file = data[0];

    if (file) {
      const imageUrlLocal = URL.createObjectURL(file);
      setImage(file);
      setImageLocal(imageUrlLocal);
    }
  };

  const checkValidate = () => {
    if (!id) {
      toast.error("Không có id !!!!");
      return false;
    }

    if (!name || name.trim() === "") {
      toast.error("Nhập thiếu dữ liệu name !!!!");
      return false;
    }
    if (!duration || duration.trim() === "") {
      toast.error("Nhập thiếu dữ liệu duration !!!!");
      return false;
    }
    if (!priceAdult || priceAdult.trim() === "") {
      toast.error("Nhập thiếu dữ liệu priceAdult !!!!");
      return false;
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

    if (!descriptionHTML) {
      toast.error("Nhập thiếu dữ liệu desriptionHTML !!!!");
      return false;
    }
    if (!descriptionTEXT) {
      toast.error("Thiếu dữ liệu desriptionTEXT !!!!");
      return false;
    }
    return true;
  };

  const handleEditTour = async () => {
    try {
      // Check validate
      const checkData = checkValidate();
      if (checkData === false) {
        return;
      }

      // Init formData

      const formData = new FormData();
      formData.append("id", id);
      formData.append("name", name);
      formData.append("priceAdult", priceAdult);
      formData.append("priceChild", priceChild);
      formData.append("duration", duration);
      formData.append("type", type);
      formData.append("descriptionHTML", descriptionHTML);
      formData.append("descriptionTEXT", descriptionTEXT);
      formData.append("domain", domain);
      formData.append("vehicle", vehicle);
      formData.append("image", image);

      // Goi API

      setIsShowSpin(true);

      const response = await TourService.updateTour(formData);

      if (response && response.data.EC === 0) {
        toast.success(response.data.EM);
        fetchData();
        setIsShowSpin(false);
        window.scrollTo(0, 0);
      } else {
        toast.error(response.data.EM);
      }
    } catch (err) {
      console.log(">> err", err);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        {/* form */}
        <div className={cx("formCreateTour")}>
          <Link to={"/tour-listTour"}>
            <IconArrowNarrowLeft className={cx("iconBack")} />
          </Link>
          <h1 className={cx("title", "text-center")}>Update Tour</h1>
          <Form>
            <Form.Group>
              <div className={cx("row my-5")}>
                <div className={cx("col-lg-12 ", "col-md-12")}>
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
              </div>
            </Form.Group>
            <Form.Group>
              <div className={cx("row my-5")}>
                <div className={cx("col-lg-12", "col-md-12")}>
                  <Form.Label>
                    Tổng thời gian Tour
                    <IconAsterisk height={10} color="red" />
                  </Form.Label>
                  <Form.Control
                    placeholder="Enter tổng thời gian tour"
                    className={cx("customInput")}
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
                    value={priceChild}
                    onChange={(e) => setPriceChild(e.target.value)}
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
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value={"noidia"}>Tour nội địa</option>
                    <option value={"nuocngoai"}> Tour nước ngoài</option>
                  </Form.Select>
                </div>
                <div className={cx("col-4 ")}>
                  <Form.Label htmlFor="disabledSelect">
                    Miền tour <IconAsterisk height={10} color="red" />
                  </Form.Label>
                  <Form.Select
                    id="disabledSelect"
                    className={cx("customInput")}
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                  >
                    <option value={"mienbac"}>Miền Bắc</option>
                    <option value={"mientrung"}> Miền Trung</option>
                    <option value={"miennam"}> Miền Nam</option>
                    <option value={"nuocngoai"}> Nước ngoài</option>
                  </Form.Select>
                </div>
                <div className={cx("col-4 ")}>
                  <Form.Label htmlFor="disabledSelect">
                    Chọn phương tiện <IconAsterisk height={10} color="red" />
                  </Form.Label>
                  <Form.Select
                    id="disabledSelect"
                    className={cx("customInput")}
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                  >
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
                  <img height={250} src={imageLocal} alt="notFound" />
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
              style={{ height: "500px", width: "100%" }}
              renderHTML={(text) => mdParser.render(text)}
              onChange={handleEditorChange}
              value={descriptionTEXT}
              className={cx("markdownForm")}
            />
          </div>
          <div className={cx("text-center my-5")}>
            <button
              onClick={handleEditTour}
              className={cx(
                "btn btn-warning border border-warning fs-3 text-white "
              )}
            >
              {isShowSpin && <Spin />}
              Cập nhật Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateTour;
