import className from "classnames/bind";
import styles from "./CreateCalendar.module.scss";
const cx = className.bind(styles);

import Form from "react-bootstrap/Form";
import { IconAsterisk } from "@tabler/icons-react";
import { Space, Table, Tag } from "antd";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

import moment from "moment";
import { toast } from "react-toastify";
import { mutate } from "swr";

import Select from "react-select";
import { useEffect, useState } from "react";

import TourService from "../../../../services/TourService";
import CalendarTourService from "../../../../services/CalendarTourService";

function CreateCalendar() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);

  const [numberSeat, setNumberSeat] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [allTour, setAllTour] = useState([]);

  // table
  const [dataTable, setDataTable] = useState([]);

  const fetchData = async () => {
    const res = await TourService.getAllTour();
    if (res && res.data.EC === 0 && res.data.DT.length > 0) {
      const allTourCus = res.data.DT.map((item) => ({
        nameTour: item.name,
        idTour: item.id,
        key: item.id,
        imageTour: item.image,
        durationTour: item.duration,
        calendar: item.Calendars,
      }));
      setAllTour(allTourCus);
      const result = [];
      res?.data?.DT?.map((item) => {
        let object = {};
        object.label = item.name;
        object.value = item.id;
        result.push(object);
      });
      setOptions(result);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "Tên Tour",
      dataIndex: "nameTour",
      key: "nameTour",
    },

    // {
    //   title: "Ảnh Tour",
    //   dataIndex: "imageTour",
    //   key: "imageTour",
    //   render: (image) => (
    //     <img src={image} alt="Hình ảnh" width="150" height="150" />
    //   ),
    // },

    {
      title: "Thời gian  Tour",
      dataIndex: "durationTour",
      key: "durationTour",
    },

    {
      title: "Lịch của Tour",
      dataIndex: "calendar",
      key: "calendar",
      width: "700px",
      render: (addresses) =>
        addresses.map((address, index) => (
          <div
            key={address.id}
            className={cx(
              "border m-2 d-flex justify-content-between p-3 border-warning"
            )}
          >
            <div>
              <b>id : {address.id}</b>
            </div>
            <div>
              <b>Chỗ ngồi : {address.numberSeat}</b>
            </div>
            <div>
              <b>
                Ngày bắt đầu :
                <span className={cx("text-primary")}>
                  {moment(address?.startDay).format("DD-MM-YYYY")}
                </span>
              </b>
            </div>
            <div>
              <b>
                Ngày kết thúc:
                <span className={cx("text-danger")}>
                  {moment(address?.endDay).format("DD-MM-YYYY")}
                </span>
              </b>
            </div>
            <div>
              <button
                onClick={handleDeleteCalendar}
                className={cx("btn border border-primary mx-2")}
              >
                Update
              </button>
              <button
                onClick={handleUpdateCalendar}
                className={cx("btn border border-danger")}
              >
                Delete
              </button>
            </div>
          </div>
        )),
    },
  ];

  const handleChangeSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption) {
      filterTour(selectedOption.value);
    }
  };

  const filterTour = (idTour) => {
    if (idTour) {
      const result = allTour?.filter((item) => item.idTour === idTour);
      setDataTable(result);
    } else {
      setDataTable([]); // Reset the table when no option is selected
    }
  };

  const checkValidate = () => {
    if (!selectedOption) {
      toast.warning("Chưa chọn Tour !!!!");
      return false;
    }
    if (!numberSeat) {
      toast.warning("Chưa nhập số chỗ ngồi !!!!");
      return false;
    }
    if (!startDate) {
      toast.warning("Chưa nhập ngày bắt đầu  !!!!");
      return false;
    }
    if (!endDate) {
      toast.warning("Chưa nhập ngày kết thúc !!!!");
      return false;
    }
    return true;
  };

  const handleClose = () => {
    setNumberSeat("");
    setStartDate(null);
    setEndDate(null);
  };

  const handleSubmitCalendar = async () => {
    const validate = checkValidate();
    if (!validate) {
      return;
    }

    const res = await CalendarTourService.create({
      idTour: selectedOption.value,
      numberSeat: numberSeat,
      startDay: startDate,
      endDay: endDate,
    });

    if (res && res.data.EC === 0 && res.data.DT.id) {
      toast.success("Tạo lịch thành công ");

      const newCalendar = {
        id: res.data.DT.id,
        numberSeat: res.data.DT.numberSeat,
        startDay: res.data.DT.startDay,
        endDay: res.data.DT.endDay,
      };
      const resIdTour = res.data.DT.idTour;
      const targetTour = dataTable.find((tour) => tour.idTour === resIdTour);

      if (targetTour) {
        targetTour.calendar.push(newCalendar);
      }

      handleClose();
      fetchData();
    }
  };

  const handleDeleteCalendar = () => {
    alert("Xoa");
  };

  const handleUpdateCalendar = () => {
    alert("Update");
  };

  return (
    <div className={cx("wraper")}>
      <div className={cx("bodyWrapper")}>
        <h1>Tạo Lịch cho Tour</h1>
        <div className={cx("add", "border border-primary my-5 p-5")}>
          <Select
            value={selectedOption}
            onChange={handleChangeSelect}
            options={options}
            className={cx("border border-primary rounded")}
          />

          <Form>
            <Form.Group>
              <div
                className={cx("flex-wrap  d-flex justify-content-between my-5")}
              >
                <div className={cx("")}>
                  <Form.Label className={cx("")}>
                    Tổng số chỗ ngồi <IconAsterisk height={10} color="red" />
                  </Form.Label>
                  <Form.Control
                    placeholder="Tổng số chỗ ngồi"
                    className={cx("customInput")}
                    spellCheck={false}
                    value={numberSeat}
                    onChange={(e) => setNumberSeat(e.target.value)}
                  />
                </div>

                <div className={cx("")}>
                  <div>
                    <Form.Label>
                      Ngày bắt đầu
                      <IconAsterisk height={10} color="red" />
                      <span className={cx("fs-4", "text-secondary")}></span>
                    </Form.Label>
                  </div>

                  <DatePicker
                    style={{ width: "500px", height: "400px" }}
                    className={cx("customInput")}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                  />
                </div>

                <div className={cx("")}>
                  <div>
                    <Form.Label>
                      Ngày kết thúc
                      <IconAsterisk height={10} color="red" />
                      <span className={cx("fs-4", "text-secondary")}></span>
                    </Form.Label>
                  </div>
                  <DatePicker
                    className={cx("customInput")}
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd/MM/yyyy"
                    minDate={startDate}
                  />
                </div>
              </div>
            </Form.Group>
          </Form>

          <div className={cx("text-center")}>
            <button
              onClick={handleSubmitCalendar}
              className={cx("btn btn-primary fs-4 px-5 ")}
            >
              Taọ lịch
            </button>
          </div>
        </div>
        <div className={cx("tableList")}>
          <Table dataSource={dataTable} columns={columns} bordered />
        </div>
      </div>
    </div>
  );
}

export default CreateCalendar;
