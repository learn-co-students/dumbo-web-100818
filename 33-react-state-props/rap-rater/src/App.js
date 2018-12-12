import React, { Component } from "react";
import logo from "./logo.svg";
import RapperContainer from "./Containers/RapperContainer";
import Form from "./Components/NewRapperForm";
import "./App.css";

const App = () => {
  return (
    <div>
      <Form />
      <RapperContainer />
    </div>
  );
};

export default App;
