import className from "classnames/bind";
import styles from "./CreateProcessTour.module.scss";
const cx = className.bind(styles);

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { useSearchParams, useParams } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
const mdParser = new MarkdownIt(/* Markdown-it options */);

import ProcessTourService from "../../../../services/ProcessTourService";

function CreateProcessTour() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [nameProcessTour, setNameProcessTour] = useState("");
  const [idTour, setIdTour] = useState(searchParams?.get("idTour"));
  const [imageTour, setImageTour] = useState(searchParams?.get("img"));
  const [nameTour, setMameTour] = useState(searchParams?.get("name"));

  const [isShowSpin, setIsShowSpin] = useState(false);
  // markdown
  const [descriptionHTML, setDescriptionHTML] = useState("");
  const [descriptionTEXT, setDescriptionTEXT] = useState("");
  function handleEditorChange({ html, text }) {
    setDescriptionHTML(html);
    setDescriptionTEXT(text);
  }

  const handleClose = () => {
    setNameProcessTour("");
    setDescriptionHTML("");
    setDescriptionTEXT("");
  };

  const checkValidate = () => {
    if (!nameProcessTour) {
      toast.error("Nhập thiếu Tên chương trình Tour");
      return false;
    }
    if (!descriptionHTML) {
      toast.error("Nhập thiếu mô tả HTML chương trình Tour");
      return false;
    }
    if (!descriptionTEXT) {
      toast.error("Nhập thiếu mô tả Text chương trình Tour");
      return false;
    }
    if (!idTour) {
      toast.error("Không có ID Tour");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    const check = checkValidate();

    if (!check) {
      return;
    }

    setIsShowSpin(true);

    const res = await ProcessTourService.createProcessTour({
      idTour: idTour,
      nameProcessTour: nameProcessTour,
      descriptionHTML: descriptionHTML,
      descriptionTEXT: descriptionTEXT,
    });

    if (res && res.data.DT.id && res.data.EC === 0) {
      toast.success(res.data.EM);
      handleClose();
      setTimeout(() => {
        navigate("/process-listProcessTour");
      }, 700);
      setIsShowSpin(false);
    } else {
      toast.warning(res.data.EM);
      navigate("/process-listProcessTour");
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper", "position-relative")}>
        <span className={cx("backIcon")}>
          <Link to={"/process-listProcessTour"}>
            <IconArrowLeft height={30} width={30} color="grey" />
          </Link>
        </span>
        <h1 className={cx("text-center", "title")}>Tạo Chương Trình Tour</h1>
        <div className={cx("text-center ")}>
          <img className={cx("imageTour")} src={imageTour} alt="notFound" />
        </div>
        <div
          className={cx(
            "border border-secondary d-flex  justify-content-between fs-3 py-4"
          )}
        >
          <div className={cx("font-weight-bold mx-4")}>
            <b>ID : {idTour}</b>
          </div>
          <div className={cx(" ")}>
            <b> {nameTour}</b>
          </div>
          <div className={cx(" ")}> </div>
        </div>
        <Form>
          <Form.Group>
            <div className={cx("row my-5")}>
              <div className={cx("col-lg-12")}>
                <Form.Label>Nhập tên chương trình của Tour</Form.Label>
                <Form.Control
                  placeholder="Enter tổng thời gian tour"
                  className={cx("customInput")}
                  spellCheck={false}
                  value={nameProcessTour}
                  onChange={(e) => setNameProcessTour(e.target.value)}
                />
              </div>
            </div>
          </Form.Group>
        </Form>
        <div className={cx("process")}>
          <h3>Tạo chương trình Tour</h3>
          <p>
            Lưu ý cú pháp lưu ảnh là : ![img]( url ) - url : đường dẫn của hình
            ảnh
          </p>

          <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
          />

          <div className={cx("btnSubmit", "text-center my-5")}>
            <button
              onClick={handleSubmit}
              className={cx(
                "btn btn-warning border border-warning fs-3 text-white "
              )}
            >
              {isShowSpin && <Spin />}
              Tạo Chương Trình Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProcessTour;
