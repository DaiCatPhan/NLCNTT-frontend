// Dùng thư viện react-Date-picker , npm i react-flatpickr
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
// import "flatpickr/dist/themes/material_green.css";
// import Flatpickr from "react-flatpickr";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [dateInput, setDateInput] = useState("");

  let formatedDate = new Date(startDate).getTime();

  return (
    <div>
      <h1>Calendaer</h1>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
        dateFormat="dd-mm-yyyy"
      />
      <p>{`${moment(startDate).format("DD-MM-YYYY")}`}</p>
      <p>{formatedDate}</p>
    </div>
  );
}

export default Calendar;
