import className from "classnames/bind";
import styles from "./TestUi.module.scss";
const cx = className.bind(styles);
import Select from "react-select";
import { useState } from "react";

function TestUi() {
  const [valueSelect, setValueSelect] = useState("");
  console.log("valueSelect", valueSelect);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleChange = (selectedOption) => {
    console.log(">>>selectedOption", selectedOption);
    setValueSelect(selectedOption.value);
  };

  return (
    <div className={cx("wrapper")}>
      <h1>React Select</h1>
      <Select onChange={handleChange} options={options} />
    </div>
  );
}

export default TestUi;
