import React from "react";
import Footer from "../layout/Footer";
import MenuCard from "../Components/MenuCard";
import { useState } from "react";
import Menu from "../Components/Menu";

export default function SeceneklerPage() {
  const [type, setType] = useState("");

  const clickHandler = (e) => {
    e.target.name === "img"
      ? setType(e.target.parentNode.name)
      : setType(e.target.name);
    e.target.name === "img"
      ? (e.target.parentNode.className = "active")
      : (e.target.className = "active");
  };
  return (
    <div>
      <Menu clickHandler={clickHandler} />
      <MenuCard type={type} />
      <Footer />
    </div>
  );
}
