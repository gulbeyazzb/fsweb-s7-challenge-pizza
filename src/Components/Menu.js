import React from "react";
import "../css/favoriteMenu.css";
import koreLogo from "../Assets/adv-aseets/icons/1.svg";
import pizza from "../Assets/adv-aseets/icons/2.svg";
import burger from "../Assets/adv-aseets/icons/3.svg";
import kızartma from "../Assets/adv-aseets/icons/4.svg";
import fastfood from "../Assets/adv-aseets/icons/5.svg";
import gazliIcecek from "../Assets/adv-aseets/icons/6.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Menu = () => {
  return (
    <div>
      <div className=" favorite-page">
        <div className="container">
          <div className="container py-4 d-flex justify-content-evenly ">
            <NavLink
              to="/secenekler"
              name="kore"
              className=" favoriteBtns  me-2 "
            >
              <img name="img" src={koreLogo} className="me-1" />
              Kore
            </NavLink>
            <NavLink
              to="/secenekler"
              name="pizza"
              className="favoriteBtns me-2 "
            >
              <img name="img" src={pizza} className="me-1" />
              Pizza
            </NavLink>
            <NavLink
              to="/secenekler"
              name="burger"
              className="favoriteBtns  me-2 "
            >
              <img name="img" src={burger} className="me-1" />
              Burger
            </NavLink>
            <NavLink
              to="/secenekler"
              name="Kızartmalar"
              className="favoriteBtns  me-2 "
            >
              <img name="img" src={kızartma} className="me-1" />
              Kızartmalar
            </NavLink>
            <NavLink
              to="/secenekler"
              name="FastFood"
              className="favoriteBtns  me-2 "
            >
              <img name="img" src={fastfood} className="me-1" />
              Fast Food
            </NavLink>
            <NavLink
              to="/secenekler"
              name="gazlıIcecek"
              className="favoriteBtns  me-2 "
            >
              <img name="img" src={gazliIcecek} className="me-1" />
              Gazlı İcecek
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
