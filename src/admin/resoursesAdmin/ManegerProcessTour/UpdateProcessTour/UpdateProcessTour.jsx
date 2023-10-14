import className from "classnames/bind";
import styles from "./UpdateProcessTour.module.scss";
const cx = className.bind(styles);

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { useSearchParams, useParams } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
const mdParser = new MarkdownIt(/* Markdown-it options */);

import ProcessTourService from "../../../../services/ProcessTourService";

function UpdateProcessTour() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [idTour, setIdTour] = useState(searchParams?.get("idTour"));

  const [idProcessTour, setIdProcessTour] = useState(0);
  const [imageTour, setImageTour] = useState("");
  const [nameProcessTour, setNameProcessTour] = useState("");
  const [nameTour, setNameTour] = useState("");
  const [descriptionHTML, setDescriptionHTML] = useState("");
  const [descriptionTEXT, setDescriptionTEXT] = useState("");

  const [isShowLoading, setIsShowLoading] = useState(false);
  const navigative = useNavigate();

  useEffect(() => {
    const fetchDataById = async () => {
      const res = await ProcessTourService.readProcessTourbyId({
        idTour: idTour,
      });
      if (res && res.data.DT.id && res.data.EC === 0) {
        const data = res?.data?.DT;
        setNameTour(data?.name);
        setImageTour(data?.image);
        setIdProcessTour(data.ProcessTour?.id);
        setNameProcessTour(data.ProcessTour?.name);
        setDescriptionHTML(data.ProcessTour?.descriptionHTML);
        setDescriptionTEXT(data.ProcessTour?.descriptionTEXT);
      }
    };
    if (idTour) {
      fetchDataById();
    }
  }, []);

  function handleEditorChange({ html, text }) {
    setDescriptionHTML(html);
    setDescriptionTEXT(text);
  }

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
    setIsShowLoading(true);

    const res = await ProcessTourService.updateProcessTourbyId({
      idTour,
      idProcessTour,
      nameProcessTour,
      descriptionHTML,
      descriptionTEXT,
    });

    console.log(res);

    if (res && res.data.EC === 0) {
      toast.success(res.data.EM);
      setIsShowLoading(false);
      window.scrollTo(0, 0);
    } else {
      toast.success(res.data.EM);
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
        <h1 className={cx("text-center", "title")}>
          Cập nhật Chương Trình Tour
        </h1>
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
                <Form.Label>Tên chương trình của Tour</Form.Label>
                <Form.Control
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
          <h3>Cập nhật chương trình Tour</h3>
          <p className={cx("text-warning")}>
            Lưu ý cú pháp lưu ảnh là : ![img]( url ) - url : đường dẫn của hình
            ảnh , can giữa dùng thẻ h5
          </p>

          <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
            value={descriptionTEXT}
            className={cx("markdownForm")}
          />

          <div className={cx("btnSubmit", "text-center my-5")}>
            <button
              onClick={handleSubmit}
              className={cx(
                "btn btn-warning border border-warning fs-3 text-white "
              )}
            >
              Cập nhật Chương Trình Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProcessTour;
