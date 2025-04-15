import React, { useState, useEffect } from "react";
import ReactTable from "../common/table";
import { getUserData } from "../data/getUserData";
import { USERCOLUMNS } from "../utils/constants";

const User = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserData();
        setUserData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means the effect runs only once after initial render

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!userData) return null; // or initial state handling

  return (
    <div>
      <h1>User List</h1>
      <ReactTable tableColumns={USERCOLUMNS} tableData={userData}></ReactTable>
    </div>
  );
};

export default User;
