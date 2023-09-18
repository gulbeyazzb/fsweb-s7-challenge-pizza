import React from "react";
import Footer from "../layout/Footer";
import MenuCard from "../Components/MenuCard";
import { useState } from "react";
import Menu from "../Components/Menu";
import FavoriteMenu from "../Components/FavoriteMenu";

export default function SeceneklerPage() {
  const [type, setType] = useState("");

  const clickHandler = (e) => {
    e.target.name === "img"
      ? setType(e.target.parentNode.name)
      : setType(e.target.name);
  };
  return (
    <div>
      <FavoriteMenu clickHandler={clickHandler} />
      <MenuCard type={type} />
      <Footer />
    </div>
  );
}
