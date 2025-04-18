import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/authProvider";
const Home = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    setAuth({});
    navigate("/login");
  };

  return (
    <section>
      <h1>Home</h1>
      <br />
      <p>Welcome {localStorage.getItem("userData")}!</p>
      <br />
      <Link to="/profile">Go to the Profile page</Link>
      <br />
      <Link to="/counters">Go to the Counters page</Link>
      <br />
      <Link to="/form">Go to the Form page</Link>
      <br />
      <Link to="/yupValidatedForm">Go to the Yup Validation</Link>
      <br />
      <Link to="/zodValidatedForm">Go to the Zod Validation</Link>
      <br />
      <Link to="/user">Go to the User page</Link>

      <div className="flexGrow">
        <button onClick={logout}>Sign Out</button>
      </div>
    </section>
  );
};

export default Home;
