import { useEffect, useState } from "react";

const dataAr = [
  {
    id: "1",
    type: "time",
    valueTIme: " 3:00 AM - 4.00 AM",
  },
  {
    id: "2",
    type: "time",
    valueTIme: " 3:00 PM - 4.00 PM",
  },
  {
    id: "3",
    type: "time",
    valueTIme: " 21:00 PM - 22.00 PM",
  },
  {
    id: "4",
    type: "time",
    valueTIme: " 1:00 AM - 4.00 AM",
  },
  {
    id: "5",
    type: "time",
    valueTIme: " 9:00 AM - 10.00 AM",
  },
];

function onClick_Active() {
  const [dataApi, setdataApi] = useState([]);
  const [dataItemActive, setDataItemActive] = useState({});
  console.log(">>> dataItemActive", dataItemActive);

  useEffect(() => {
    if (dataAr && dataAr.length > 0) {
      const dataCustomize = dataAr.map((item) => {
        return {
          ...item,
          isSelected: false,
        };
      });
      setdataApi(dataCustomize);
    }
  }, []);

  // click thằng nào lấy ra được dữ liệu thằng đó va active thang do
  const handleGetItemOnclick = (dataItem) => {
    let dataApiCus = dataApi.map((item) => {
      item.isSelected = false;
      if (item.id === dataItem.id) {
        item.isSelected = !item.isSelected;
      }
      return item;
    });
    setdataApi(dataApiCus);
    setDataItemActive(dataItem);
  };
  return (
    <div className="d-flex justify-content-center my-5">
      {dataApi.map((item, index) => {
        return (
          <div
            onClick={() => handleGetItemOnclick(item)}
            key={item.id}
            className={
              item.isSelected === true
                ? "border p-5 mx-4 bg-danger"
                : "border p-5 mx-4 "
            }
          >
            {item.valueTIme}
            <p> {`${item.isSelected}`}</p>
          </div>
        );
      })}
    </div>
  );
}

export default onClick_Active;
