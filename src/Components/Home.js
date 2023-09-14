import React, { useState } from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import HighlightMenu from "./HighlightMenu";
import FavoriteMenu from "./FavoriteMenu";
import MenuCard from "./MenuCard";
const Home = () => {
  const [type, setType] = useState("");

  const clickHandler = (e) => {
    e.target.name === "img"
      ? setType(e.target.parentNode.name)
      : setType(e.target.name);
  };
  return (
    <div>
      <div className="home-page">
        <div className="container">
          <p className="p-yellow">Lezzeti Kaçırma</p>
          <p className="p-white">KOD ACIKTIRIR</p>
          <p className="p-white">PİZZA DOYURUR</p>
          <Link to="/secenekler" exact>
            <button className="btn btn-warning rounded-pill px-5">
              ACIKTIM
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Menu clickHandler={clickHandler} />
      </div>
      <div>
        <HighlightMenu />
      </div>
      <div>
        <FavoriteMenu clickHandler={clickHandler} />
      </div>
      <div>
        <MenuCard type={type} />
      </div>
    </div>
  );
};
export default Home;
