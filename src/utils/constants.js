import { ColumnFilter } from "../common/columnFilter";

export const USER_DATA_URL = "https://dummyjson.com/users";

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
