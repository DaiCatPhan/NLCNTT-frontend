import className from "classnames/bind";
import styles from "./CreateProcessTour.module.scss";
const cx = className.bind(styles);

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { useSearchParams, useParams } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
const mdParser = new MarkdownIt(/* Markdown-it options */);

function CreateProcessTour() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [nameProcessTour, setNameProcessTour] = useState("");
  const [idTour, setIdTour] = useState(searchParams?.get("idTour"));
  const [imageTour, setImageTour] = useState(searchParams?.get("img"));
  const [nameTour, setMameTour] = useState(searchParams?.get("name"));
  // markdown
  const [desriptionHTML, setDescriptionHTML] = useState("");
  const [desriptionTEXT, setDescriptionTEXT] = useState("");
  function handleEditorChange({ html, text }) {
    setDescriptionHTML(html);
    setDescriptionTEXT(text);
  }

  const handleSubmit = () => {
    console.log({idTour , nameProcessTour, desriptionHTML, desriptionTEXT });
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
              Tạo Chương Trình Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProcessTour;
