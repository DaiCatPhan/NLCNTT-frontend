// import className from "classnames/bind";
// import styles from "./react_Select.module.scss";
// const cx = className.bind(styles);
import Select from "react-select";
import { useState } from "react";

const dataArray = [
  {
    id: 1,
    age: 12,
    label: "Phan Dai Cat",
    value: "PHan Dai Cat",
  },
  {
    id: 2,
    age: 20,
    label: "Nguyen Van A",
    value: "NGuyen VAn A",
  },
  {
    id: 3,
    age: 50,
    label: "Phan Dai Cat",
    value: "PHan Dai Cat",
  },
  {
    id: 2,
    age: 20,
    label: "Nguyen Van B",
    value: "NGuyen VAn B",
  },
  {
    id: 2,
    age: 20,
    label: "Nguyen Van C",
    value: "NGuyen VAn C",
  },
];

function react_Select() {
  const [valueSelect, setValueSelect] = useState("");
  console.log("valueSelect", valueSelect);

  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];

  const handleChange = (selectedOption) => {
    console.log(">>>selectedOption", selectedOption);
    setValueSelect(selectedOption.value);
  };

  const handleBuild = (inputData) => {
    let result = [];
    if (inputData && inputData.length > 0) {
      inputData.map((item, index) => {
        let object = {};
        object.label = item.label;
        object.value = item.value;
        result.push(object);
      });
    }
    return result;
  };

  const options = handleBuild(dataArray);

  return (
    <div>
      <h1>React Select</h1>
      <Select onChange={handleChange} options={options} />
    </div>
  );
}

export default react_Select;
