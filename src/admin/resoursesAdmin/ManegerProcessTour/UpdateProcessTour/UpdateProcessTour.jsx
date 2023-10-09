import className from "classnames/bind";
import styles from "./UpdateProcessTour.module.scss";
const cx = className.bind(styles);

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
const mdParser = new MarkdownIt(/* Markdown-it options */);

function UpdateProcessTour() {
  // markdown
  const [desriptionHTML, setDescriptionHTML] = useState("");
  const [desriptionTEXT, setDescriptionTEXT] = useState("");
  function handleEditorChange({ html, text }) {
    setDescriptionHTML(html);
    setDescriptionTEXT(text);
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <h1>UpdateProcessTour</h1>
        <Form className={cx(" ")}>
          <Form.Group>
            <div className={cx("row my-5")}>
              <div className={cx("col-lg-12")}>
                <Form.Label className={cx("")}>  Tour</Form.Label>
                <Form.Control
                  placeholder="Enter name tour"
                  className={cx("customInput")}
                  spellCheck={false}
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group>
            <div className={cx("row my-5")}>
              <div className={cx("col-lg-12")}>
                <Form.Label>Nhập tên chương trình của Tour</Form.Label>
                <Form.Control
                  placeholder="Enter tổng thời gian tour"
                  className={cx("customInput")}
                  spellCheck={false}
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
        </div>
      </div>
    </div>
  );
}

export default UpdateProcessTour;
