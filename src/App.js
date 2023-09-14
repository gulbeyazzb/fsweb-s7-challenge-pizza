import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./layout/Main";
import { Link } from "react-router-dom";
import axios from "axios";
const App = () => {
  return (
    <>
      {/*Başlığa click edildiğinde anasayfaya yönlendirir. */}
      <Link className="titleLink" to="/">
        <h1 className="title">Teknolojik Yemekler</h1>
      </Link>
      <Main />
    </>
  );
};
export default App;
