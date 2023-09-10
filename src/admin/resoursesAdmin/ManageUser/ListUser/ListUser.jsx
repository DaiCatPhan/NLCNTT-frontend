import className from "classnames/bind";
import styles from "./ListUser.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const cx = className.bind(styles);
import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Space, Table } from "antd";

function ListUser() {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1, // 2 3
      pageSize: 3, // 10 3
    },
  });
  const [totalPage, setTotalPage] = useState(0);

  const [userData, setUserData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => (searchedColumn === dataIndex ? text : text),
  });

  const handleTableChange = (pagination) => {
    setTableParams({ pagination });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone",
      ...getColumnSearchProps("phone"),
    },
  ];

  const getUsers = () => {
    axios
      .get(`http://localhost:3000/api/v1/staff/getListPaginationStaff`, {
        params: {
          offset:
            (tableParams.pagination.current - 1) *
            tableParams.pagination.pageSize,
          limit:
            tableParams.pagination.pageSize,
        },
      })
      .then((res) => {
        console.log(res);
        const dataColumn = res?.data?.rows?.map((user) => {
          return {
            id: user.id,
            email: user.email,
            phone: user.phone,
            key: user.id,
            name: user.name,
          };
        });
        setTotalPage(res?.data?.count || 0);
        setUserData(dataColumn);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUsers();
  }, [tableParams]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  return (
    <div className={cx("wrapper")}>
      <div className="m-5">
        <Table
          pagination={{
            pageSize: tableParams.pagination.pageSize,
            total: totalPage,
            showSizeChanger: true,
            pageSizeOptions: ["3", "6", "9", "12"],
          }}
          onChange={handleTableChange}
          columns={columns}
          dataSource={userData}
        />
      </div>
    </div>
  );
}

export default ListUser;
