import { ColumnFilter } from "../common/columnFilter";

export const USER_DATA_URL = "https://dummyjson.com/users";
export const LOGIN_URL = "https://dummyjson.com/auth/login";
export const PROFILE_URL = "https://dummyjson.com/auth/me";
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const USERCOLUMNS = [
  {
    Header: "id",
    accessor: "id",
    disableFilters: true,
  },
  {
    Header: "Name",
    accessor: (row) => `${row.firstName} ${row.lastName}`,
  },
  {
    Header: "userName",
    accessor: "username",
  },
  {
    Header: "password",
    accessor: "password",
    disableFilters: true,
  },
  {
    Header: "email",
    accessor: "email",
  },
  {
    Header: "Date Of Birth",
    accessor: "birthDate",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Contact",
    accessor: "phone",
  },
];
