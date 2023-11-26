import className from "classnames/bind";
import styles from "./CreateCalendar.module.scss";
const cx = className.bind(styles);

import Form from "react-bootstrap/Form";
import { IconAsterisk } from "@tabler/icons-react";
import { Space, Table, Tag } from "antd";
import { DatePicker } from "antd";
import { message } from "antd";

import moment from "moment";
import { toast } from "react-toastify";

import Select from "react-select";
import { useEffect, useMemo, useState } from "react";

import TourService from "../../../../services/TourService";
import CalendarTourService from "../../../../services/CalendarTourService";

function CreateCalendar() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);

  const [numberSeat, setNumberSeat] = useState("");
  const [priceAdult, setPriceAdult] = useState("");
  const [priceChild, setPriceChild] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [allTour, setAllTour] = useState([]);

  // table

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
        priceAdultTour: item.priceAdult,
        priceChildTour: item.priceChild,
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

  const dataTable =
    useMemo(() => {
      if (allTour && allTour.length > 0) {
        const dataTable = allTour.filter(
          (item) => item.idTour === selectedOption?.value
        );

        setPriceAdult(dataTable[0]?.priceAdultTour);
        setPriceChild(dataTable[0]?.priceChildTour);

        return dataTable;
      }
    }, [selectedOption, allTour]) || [];

  const handleChangeSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
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
    if (!priceAdult) {
      toast.warning("Chưa nhập giá vé người lớn !!!!");
      return false;
    }
    if (!priceChild) {
      toast.warning("Chưa nhập giá vé trẻ em !!!!");
      return false;
    }
    const regex = /^(\d{1,3}(\.\d{3})*|\d+)$/;
    if (!regex.test(priceAdult)) {
      toast.warning("Nhập giá vé người lớn chưa đúng định dạng !!!!");
      return false;
    }
    if (!regex.test(priceChild)) {
      toast.warning("Nhập giá vé trẻ em chưa đúng định dạng !!!!");
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
    setPriceAdult("");
    setPriceChild("");
    setStartDate(null);
    setEndDate(null);
  };

  const onChangeDatePickerStartDay = (date) => {
    setStartDate(date);
  };

  const onChangeDatePickerEndDay = (date) => {
    setEndDate(date);
  };

  const disabledDate = (current) => {
    return current && current < new Date();
  };

  const disabledEndDate = (current) => {
    return current && current < startDate;
  };

  // Tạo lịch

  const handleSubmitCalendar = async () => {
    const validate = checkValidate();
    if (!validate) {
      return;
    }

    const res = await CalendarTourService.create({
      idTour: selectedOption.value,
      numberSeat: numberSeat,
      priceAdult: priceAdult.replace(/\./g, ""),
      priceChild: priceChild.replace(/\./g, ""),
      startDay: startDate,
      endDay: endDate,
    });

    if (res && res.data.EC === 0 && res.data.DT.id) {
      toast.success("Tạo lịch thành công ");
      handleClose();
      fetchData();
    }
  };

  const handleDeleteCalendar = async (data) => {
    if (data.id) {
      const deleted = await CalendarTourService.delete_Calendar({
        idCalendar: data.id,
      });
      if (deleted && deleted.data.EC == 0) {
        message.success(deleted.data.EM, 2);
        fetchData();
      } else {
        message.error(deleted.data.EM, 2);
      }
    }
  };

  const handleUpdateCalendar = () => {
    alert("Update");
  };

  const columns = [
    {
      title: "Tên Tour",
      dataIndex: "nameTour",
      key: "nameTour",
    },

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
              "border m-2 d-flex justify-content-between p-3 border-warning align-items-center"
            )}
          >
            <div>
              <b>id : {address.id}</b>
            </div>
            <div>
              <b>Chỗ ngồi : {address.numberSeat}</b>
            </div>

            {/*  Gia ve */}
            <div>
              <div>
                <b>
                  Giá người lớn :
                  <span className={cx("text-primary")}>
                    {address?.priceAdult?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </span>
                </b>
              </div>
              <div>
                <b>
                  Giá vé trẻ em:
                  <span className={cx("text-danger")}>
                    {address?.priceChild?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </span>
                </b>
              </div>
            </div>
            <div>
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
            </div>
            <div className={cx("")}>
              {/* <button
                onClick={handleDeleteCalendar}
                className={cx("btn border border-primary mx-2")}
              >
                Update
              </button> */}
              <button
                onClick={() => handleDeleteCalendar(address)}
                className={cx("btn border border-danger")}
              >
                Delete
              </button>
            </div>
          </div>
        )),
    },
  ];

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

                  <Space direction="vertical">
                    <DatePicker
                      format={"DD/MM/YYYY"}
                      onChange={onChangeDatePickerStartDay}
                      className={cx("customInput")}
                      disabledDate={disabledDate}
                      value={startDate}
                    />
                  </Space>
                </div>

                <div className={cx("")}>
                  <div>
                    <Form.Label>
                      Ngày kết thúc
                      <IconAsterisk height={10} color="red" />
                      <span className={cx("fs-4", "text-secondary")}></span>
                    </Form.Label>
                  </div>

                  <Space direction="vertical">
                    <DatePicker
                      format={"DD/MM/YYYY"}
                      onChange={onChangeDatePickerEndDay}
                      className={cx("customInput")}
                      disabledDate={disabledEndDate}
                      value={endDate}
                    />
                  </Space>
                </div>
              </div>
            </Form.Group>
          </Form>

          <div className={cx("row my-5")}>
            <div className={cx("col-6")}>
              <Form.Label className={cx("")}>
                Nhập giá vé người lớn ( 2.000.000 ){" "}
                <IconAsterisk height={10} color="red" />
              </Form.Label>
              <Form.Control
                placeholder="Giá vé người lớn"
                className={cx("customInput")}
                spellCheck={false}
                defaultValue={priceAdult?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                onChange={(e) => setPriceAdult(e.target.value)}
              />
            </div>

            <div className={cx("col-6")}>
              <Form.Label className={cx("")}>
                Nhập giá vé trẻ em ( 1.500.000 )
                <IconAsterisk height={10} color="red" />
              </Form.Label>
              <Form.Control
                placeholder="Giá vé trẻ em"
                className={cx("customInput")}
                spellCheck={false}
                defaultValue={priceChild?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                onChange={(e) => setPriceChild(e.target.value)}
              />
            </div>
          </div>

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
