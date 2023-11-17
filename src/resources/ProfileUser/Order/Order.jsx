import className from "classnames/bind";
import styles from "./Order.module.scss";
const cx = className.bind(styles);

import { Table } from "antd";
import { Tabs } from "antd";
import { Collapse } from "antd";

import BookingTourOrder from "./components/BookingTourOrder";
import { useEffect, useMemo, useState } from "react";
import moment from "moment";
import BookingTourService from "../../../services/BookingTourService";

import useAuth from "../../../hook/useAuth";

function Order() {
  const { profile } = useAuth();
  const [pageSize, setPageSize] = useState(5);
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(20);
  const [status, setStatus] = useState(0);
  const [listData, setListData] = useState([]);

  const handleColumnStatus = (status) => {
    if (status == 0) {
      return "Chưa duyệt";
    }
    if (status == 1) {
      return "Đã duyệt";
    }
    if (status == 2) {
      return "Bị hủy";
    }
  };

  const onChangeTab = (key) => {
    setStatus(key);
  };

  const items = [
    {
      key: "0",
      label: "Đơn chưa duyệt",
    },
    {
      key: "1",
      label: "Đơn đã duyệt",
    },
    {
      key: "2",
      label: "Đơn bị hủy",
    },
  ];

  const handleTableChange = (data) => {
    setCurrent(data.current);
    setPageSize(data.pageSize);
    setTotal(data.total);
  };

  const fetchData = async () => {
    const res = await BookingTourService.read(
      `idCustomer=${profile.email}&page=${current}&limit=${pageSize}&status=${status}`
    );
    if (res && res.data.EC == 0) {
      let cus = res.data.DT.users.map((item) => ({
        ...item,
        key: item.id,
      }));

      setListData(cus);
      setTotal(res.data.DT.totalRows);
    }
  };

  useEffect(() => {
    fetchData();
  }, [current, pageSize, status]);

  const columns = [
    {
      title: "Name",
      dataIndex: "Customer",
      key: "name",
      render: (Customer) => <div>{Customer.name}</div>,
    },

    {
      title: "Tổng tiền đơn ",
      dataIndex: "money",
      key: "money",
      render: (money) => <div>{money.toLocaleString("vi-VN")}</div>,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <div className={cx("text-primary")}>
          <b>{handleColumnStatus(status)}</b>
        </div>
      ),
    },
    {
      title: "Lịch",
      dataIndex: "Calendar",
      key: "Calendar",
      render: (Calendar) => (
        <div className={cx(" ")}>
          <div>
            Ngày khởi hành : {moment(Calendar?.startDay).format("YYYY-MM-DD")}
          </div>
          <div>
            Ngày kết thúc : {moment(Calendar?.endDay).format("YYYY-MM-DD")}
          </div>
        </div>
      ),
    },
    {
      title: "Chi tiết đơn ",
      key: "dataItem",
      render: (dataItem) => {
        const itemsCollapse = [
          {
            key: "1",
            label: "Chi tiết đơn hàng",
            children: (
              <div>
                <div className={cx("row")}>
                  <div className={cx("col-lg-2")}>
                    <img
                      height={60}
                      width={60}
                      src={dataItem?.Calendar?.Tour?.image}
                      alt="notFound"
                    />
                  </div>
                  <div className={cx("col-lg")}>
                    {dataItem?.Calendar?.Tour?.name}
                  </div>
                </div>
                <div className={cx("row")}>
                  <div className={cx("col-lg")}>
                    <div>
                      Giá người lớn : {dataItem?.Calendar?.Tour?.priceAdult}
                    </div>
                    <div>
                      Giá trẻ em : {dataItem?.Calendar?.Tour?.priceChild}
                    </div>
                  </div>
                  <div className={cx("col-lg")}>
                    <div>Số vé lớn : {dataItem.numberTicketAdult}</div>
                    <div>Số vé nhỏ : {dataItem.numberTicketChild}</div>
                  </div>
                </div>
              </div>
            ),
          },
        ];
        return <Collapse key={1} items={itemsCollapse}></Collapse>;
      },
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper p-5")}>
        <div>
          <Tabs defaultActiveKey="0" items={items} onChange={onChangeTab} />
        </div>
        <div>
          <Table
            dataSource={listData}
            columns={columns}
            onChange={handleTableChange}
            pagination={{
              current: current,
              pageSize: pageSize,
              total: total,
              showSizeChanger: true,
              pageSizeOptions: ["1", "2", "3", "5", "9", "12"],
            }}
            bordered
          />
        </div>
      </div>
    </div>
  );
}

export default Order;
