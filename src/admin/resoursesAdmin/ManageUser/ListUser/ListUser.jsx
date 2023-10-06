import className from "classnames/bind";
import styles from "./ListUser.module.scss";
import { Link } from "react-router-dom";
import axios from "../../../../services/customize-axios";
import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Space, Table } from "antd";
import { toast } from "react-toastify";
import {
  IconEdit,
  IconTrashX,
  IconCirclePlus,
  IconFileDownload,
  IconFileExport,
} from "@tabler/icons-react";
import { CSVLink, CSVDownload } from "react-csv";
import Papa from "papaparse";

import ModalAddNewUser from "../component/ModalAddNewUser";
import ModalEditUser from "../component/ModalEditUser";
import ModalDeleteUser from "../component/ModalDeleteUser";

import UserService from "../../../../services/UserService";
import useAuth from "../../../../hook/useAuth";

const cx = className.bind(styles);

function ListUser() {
  const { isLogged, role, profile } = useAuth();
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

  // ============= Libary ====================
  //  ============Search ================
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

  const [totalPage, setTotalPage] = useState(0);
  const [userData, setUserData] = useState([]);

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 3,
    },
  });

  const handleTableChange = (pagination) => {
    setTableParams({ pagination });
  };

  const getUsers = async () => {
    let res = await UserService.fetchAllUser(
      tableParams.pagination.current,
      tableParams.pagination.pageSize
    );
    if (res && res.data && res.data.EC === 0) {
      const resDataUser = res.data.DT.users;
      const resDataTotalPage = res.data.DT.totalRows;
      const resDataUserCopy = resDataUser.map((user, index) => {
        return {
          id: user.id,
          name: user.name,
          phone: user.phone,
          gender: user.gender,
          role: user.role,
          email: user.email,
          key: user.id,
          image: user.image,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        };
      });

      setTotalPage(resDataTotalPage);
      setUserData(resDataUserCopy);
    }
  };

  const columns = [
    //  Id
    {
      title: "ID",
      dataIndex: "id",
      sorter: {
        compare: (a, b) => a.id - b.id,
      },

      ...getColumnSearchProps("id"),
    },

    //  Username

    {
      title: "Họ và tên",
      dataIndex: "name",
      ...getColumnSearchProps("name"),
    },
    // Email
    {
      title: "Email",
      dataIndex: "email",

      ...getColumnSearchProps("email"),
    },

    //   Phone
    {
      title: "Phone",
      dataIndex: "phone",
      ...getColumnSearchProps("phone"),
    },
    // Gioi tinh
    {
      title: "Giới tính",
      dataIndex: "gender",
      sorter: {
        compare: (a, b) => a.gender.length - b.gender.length,
      },

      ...getColumnSearchProps("gender"),
    },
    // Chuc vu
    {
      title: "Chức vụ",
      dataIndex: "role",
      sorter: {
        compare: (a, b) => a.role.length - b.role.length,
      },
      ...getColumnSearchProps("role"),
    },
    //  Thao tac
    {
      title: "Thao tác",
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

  useEffect(() => {
    getUsers();
  }, [tableParams]);

  // ========= Import CSV ================
  // const handleImportCSV = (e) => {
  //   if (e.target && e.target.files && e.target.files[0]) {
  //     let file = e.target.files[0]; // file có kiểu là file object

  //     if (file.type != "text/csv") {
  //       toast.error("Upload accept csv file !");
  //       return;
  //     }

  //     // Parse local CSV file
  //     Papa.parse(file, {
  //       // header: true,
  //       complete: function (results) {
  //         let rawCSV = results.data;
  //         if (rawCSV.length > 0) {
  //           if (rawCSV[0] && rawCSV[0].length === 5) {
  //             // check 5 là số trường trong dữ liệu , người nhập k được dư hoặc thiếu trong file CSV
  //             if (
  //               rawCSV[0][0] !== "name" ||
  //               rawCSV[0][1] !== "phone" ||
  //               rawCSV[0][2] !== "gender" ||
  //               rawCSV[0][3] !== "role" ||
  //               rawCSV[0][4] !== "email"
  //             ) {
  //               // check xem các trường (tiêu đề) trong file CSV có đúng với dữ liệu trong database k
  //               toast.error("Wrong fomat Header CSV file !!!");
  //             } else {
  //               let result = []; // Kết quả cuối cùng kakaka . hãy kêu api rồi lưu vào dữ liệu là xong
  //               rawCSV.map((item, index) => {
  //                 if (index > 0 && item.length == 5) {
  //                   let obj = {};
  //                   obj.name = item[0];
  //                   obj.phone = item[1];
  //                   obj.gender = item[2];
  //                   obj.role = item[3];
  //                   obj.email = item[4];
  //                   result.push(obj);
  //                 }
  //               });

  //               console.log("Check >>> result ", result);
  //               // Gọi API lưu vào database -> Gọi lại hàm để reload lại danh sách hiện ok !
  //               toast.success("Import data thành công hihi >>>");
  //             }
  //           } else {
  //             toast.error("Wrong fomat CSV file !!!");
  //           }
  //         } else {
  //           toast.error("Not found data on CSV file !!!");
  //         }
  //       },
  //     });
  //   }
  // };

  return (
    <div className={cx("wrapper")}>
      <div className="m-5   ">
        <div className={cx("btn_function")}>
          <div className={cx("csv")}>
            <label htmlFor="import" className="btn btn-primary py-1 fs-5">
              <IconFileExport /> Import
            </label>
            <input
              type="file"
              id="import"
              className="d-none"
              onChange={(e) => handleImportCSV(e)}
            />
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
            pageSizeOptions: ["1", "2", "3", "6", "9", "12"],
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
          setShow={setIsShowModalEditUser}
          dataUserEdit={dataEditUser}
          setDataEdituser={setDataEdituser}
          handleUpdateListUser={getUsers}
        />

        <ModalDeleteUser
          show={isShowModalDeleteUser}
          handleClose={handleClose}
          dataDeleteUser={dataDeleteUser}
          handleUpdateListUser={getUsers}
        />
      </div>
      <div className="mt-3 px-2">{profile?.email}</div>
      <div className="mt-3 px-2">{role}</div>
    </div>
  );
}

export default ListUser;
