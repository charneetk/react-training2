import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Layout from "./components/layout";
import RequireAuth from "./components/requireAuth";
import Profile from "./components/profile";
import Counters from "./components/counters";
import Form from "./components/form";
import YupValidatedForm from "./components/yupValidatedForm";
import ZodValidatedForm from "./components/zodValidatedForm";
import User from "./components/user";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*Public routes*/}
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>

          {/** Private Routes */}

          <Route element={<RequireAuth />}>
            <Route element={<Home />} path="/"></Route>
            <Route element={<Profile />} path="/profile"></Route>
            <Route element={<Counters />} path="/counters"></Route>
            <Route element={<Form />} path="/form"></Route>
            <Route
              element={<YupValidatedForm />}
              path="/yupValidatedForm"
            ></Route>
            <Route
              element={<ZodValidatedForm />}
              path="/zodValidatedForm"
            ></Route>
            <Route element={<User />} path="/user"></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
