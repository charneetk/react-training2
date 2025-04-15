import "./App.css";
import Counters from "./components/counters";
import React from "react";
import NavBar from "./components/navBar";
import { Route, Routes } from "react-router";
import Form from "./components/form";
import YupValidatedForm from "./components/yupValidatedForm";
import ZodValidatedForm from "./components/zodValidatedForm";
import User from "./components/user";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route element={<Counters />} path="/"></Route>
        <Route element={<Form />} path="/form"></Route>
        <Route element={<YupValidatedForm />} path="/yupValidatedForm"></Route>
        <Route element={<ZodValidatedForm />} path="/zodValidatedForm"></Route>
        <Route element={<User />} path="/user"></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
