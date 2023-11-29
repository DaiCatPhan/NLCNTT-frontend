import className from "classnames/bind";
import styles from "./StaticsticalTour.module.scss";
const cx = className.bind(styles);
import { Link } from "react-router-dom";
import BookingTourService from "../../../../services/BookingTourService";
import { useEffect, useState } from "react";
import { Table } from "antd";
import { Select } from "antd";

function StaticsticalTour() {
  const [revenueList, setRevenueList] = useState([]);
  const [month, setMonth] = useState(11);

  const fetchData = async () => {
    const res = await BookingTourService.revenue(`month=${month}`);
    if (res && res.data.EC === 0) {
      const cusdata = res.data.DT.map((item) => {
        return {
          ...item,
          key: item.tour.id,
        };
      });

      setRevenueList(cusdata);
    }
  };

  useEffect(() => {
    fetchData();
  }, [month]);

  const columns = [
    {
      title: "Ảnh",
      dataIndex: "tour",
      key: "image",
      render: (tour) => {
        return (
          <img src={tour?.image} alt="notFoune" width={100} height={100} />
        );
      },
    },
    {
      title: "Tên Tour",
      dataIndex: "tour",
      key: "name",
      render: (tour) => {
        return <div>{tour?.name}</div>;
      },
    },

    {
      title: "Doanh thu tháng",
      dataIndex: "revenueMonth",
      key: "doanhthu",
      render: (revenueMonth) => {
        return <div>{revenueMonth.toLocaleString("vi-VN")} đ</div>;
      },
    },
  ];

  const handleChangeSelect = (value) => {
    setMonth(value);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper", "p-5")}>
        <div className={cx("d-flex  my-3")}>
          <h3>Thống kê doanh thu theo tháng</h3>
          <div className={cx("mx-5")}>
            <Select
              value={`${month}`}
              style={{
                width: 120,
              }}
              onChange={handleChangeSelect}
              options={[
                {
                  label: "Tháng 1",
                  value: "0",
                },
                {
                  label: "Tháng 2",
                  value: "1",
                },
                {
                  label: "Tháng 3",
                  value: "2",
                },
                {
                  label: "Tháng 4",
                  value: "3",
                },
                {
                  label: "Tháng 5",
                  value: "4",
                },
                {
                  label: "Tháng 6",
                  value: "5",
                },
                {
                  label: "Tháng 7",
                  value: "6",
                },
                {
                  label: "Tháng 8",
                  value: "7",
                },
                {
                  label: "Tháng 9",
                  value: "8",
                },
                {
                  label: "Tháng 10",
                  value: "9",
                },
                {
                  label: "Tháng 11",
                  value: "10",
                },
                {
                  label: "Tháng 12",
                  value: "11",
                },
              ]}
            />
          </div>
        </div>

        <div>
          <Table dataSource={revenueList} columns={columns} />;
        </div>
      </div>
    </div>
  );
}

export default StaticsticalTour;
