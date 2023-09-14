import className from "classnames/bind";
import styles from "./ListUser.module.scss";
import { Link } from "react-router-dom";
import axios from "../../../../services/customize-axios";
const cx = className.bind(styles);
import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Space, Table } from "antd";
import {
  IconEdit,
  IconTrashX,
  IconCirclePlus,
  IconFileDownload,
  IconFileExport,
} from "@tabler/icons-react";
import { CSVLink, CSVDownload } from "react-csv";

import ModalAddNewUser from "../component/ModalAddNewUser";
import ModalEditUser from "../component/ModalEditUser";
import ModalDeleteUser from "../component/ModalDeleteUser";

function ListUser() {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
  const [isShowModalEditUser, setIsShowModalEditUser] = useState(false);
  const [isShowModalDeleteUser, setIsShowModalDeleteUser] = useState(false);

  const [dataEditUser, setDataEdituser] = useState({});
  const [dataDeleteUser, setDataDeleteUser] = useState({});

  const handleAddUser = () => {
    setIsShowModalAddNew(true);
  };
  const handleEditUser = (userEdit) => {
    setIsShowModalEditUser(true);
    setDataEdituser(userEdit);
  };

  const handleDeleteUser = (userDelete) => {
    setIsShowModalDeleteUser(true);
    setDataDeleteUser(userDelete);
  };

  const handleClose = () => {
    setIsShowModalAddNew(false);
    setIsShowModalEditUser(false);
    setIsShowModalDeleteUser(false);
  };

  // =============  Sort  ==================

  // ============= Search ======================
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

  // ============== End Search =================

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1, // 2 3
      pageSize: 6, // 10 3
    },
  });
  const [totalPage, setTotalPage] = useState(0);
  const [userData, setUserData] = useState([]);

  const handleTableChange = (pagination) => {
    setTableParams({ pagination });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: {
        compare: (a, b) => a.id - b.id,
      },

      ...getColumnSearchProps("id"),
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",

      ...getColumnSearchProps("name"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",

      ...getColumnSearchProps("email"),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",

      ...getColumnSearchProps("phone"),
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      sorter: {
        compare: (a, b) => a.gender.length - b.gender.length,
      },
      ...getColumnSearchProps("gender"),
    },
    {
      title: "Chức vụ",
      dataIndex: "role",
      key: "role",
      sorter: {
        compare: (a, b) => a.role.length - b.role.length,
      },
      ...getColumnSearchProps("role"),
    },
    {
      title: "Thao tác",
      key: "thaotac",
      render: (record) => {
        return (
          <>
            <Link>
              <IconEdit
                className="mx-3 "
                size={26}
                color="green"
                onClick={() => handleEditUser(record)}
              />
            </Link>
            <Link>
              <IconTrashX
                className="mx-3"
                size={26}
                color="red"
                onClick={() => handleDeleteUser(record)}
              />
            </Link>
          </>
        );
      },
    },
  ];

  const getUsers = () => {
    axios
      .get(`/api/v1/staff/getListPaginationStaff`, {
        params: {
          offset:
            (tableParams.pagination.current - 1) *
            tableParams.pagination.pageSize,
          limit: tableParams.pagination.pageSize,
        },
      })
      .then((res) => {
        console.log(res);
        const dataColumn = res?.data?.rows?.map((user) => {
          return {
            id: user.id,
            name: user.name,
            phone: user.phone,
            gender: user.gender,
            role: user.role,
            email: user.email,
            key: user.id,
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

  return (
    <div className={cx("wrapper")}>
      <div className="m-5   ">
        <div className={cx("btn_function")}>
          <div className={cx("csv")}>
            <label htmlFor="import" className="btn btn-primary py-1 fs-5">
              <IconFileExport /> Import
            </label>
            <input type="file" id="import" className="d-none" />
            <CSVLink
              data={userData}
              filename={"user.csv"}
              className="btn btn-warning py-1 px-3 fs-5 mx-3 text-white"
              target="_blank"
            >
              <IconFileDownload /> Export
            </CSVLink>
          </div>

          <button className={cx("addBtn")} onClick={handleAddUser}>
            <IconCirclePlus /> Add User
          </button>
        </div>

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
          bordered
        />

        <ModalAddNewUser
          show={isShowModalAddNew}
          handleClose={handleClose}
          handleUpdateListUser={getUsers}
        />

        <ModalEditUser
          show={isShowModalEditUser}
          handleClose={handleClose}
          dataUserEdit={dataEditUser}
          handleUpdateListUser={getUsers}
        />

        <ModalDeleteUser
          show={isShowModalDeleteUser}
          handleClose={handleClose}
          dataDeleteUser={dataDeleteUser}
          handleUpdateListUser={getUsers}
        />
      </div>
    </div>
  );
}

export default ListUser;
