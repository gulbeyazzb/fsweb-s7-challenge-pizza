import React from "react";
import "../css/favoriteMenu.css";
import { Link } from "react-router-dom";
import koreLogo from "../Assets/adv-aseets/icons/1.svg";
import pizza from "../Assets/adv-aseets/icons/2.svg";
import burger from "../Assets/adv-aseets/icons/3.svg";
import kızartma from "../Assets/adv-aseets/icons/4.svg";
import fastfood from "../Assets/adv-aseets/icons/5.svg";
import gazliIcecek from "../Assets/adv-aseets/icons/6.svg";
const FavoriteMenu = ({ clickHandler }) => {
  return (
    <div>
      <div className=" favorite-page">
        <div className="container">
          <Link to="/secenekler" exact className="text-decoration-none">
            <p className="py-4 p-red"> En Çok Paketlenen Menüler</p>
          </Link>
          <p className="p-black">Acıktıran Kodlara Doyuran Lezzetler</p>
          <div className="container py-4 d-flex justify-content-evenly ">
            <button
              onClick={clickHandler}
              name="kore"
              className="  favoriteBtns  me-2 "
            >
              <img name="img" src={koreLogo} className="me-1" />
              Kore
            </button>

            <button
              onClick={clickHandler}
              name="pizza"
              data-cy="pizzabtn"
              className=" favoriteBtns me-2 "
            >
              <img name="img" src={pizza} className="me-1" />
              Pizza
            </button>

            <button
              onClick={clickHandler}
              name="burger"
              className="favoriteBtns  me-2 "
            >
              <img name="img" src={burger} className="me-1" />
              Burger
            </button>

            <button
              onClick={clickHandler}
              name="Kızartmalar"
              className="favoriteBtns  me-2 "
            >
              <img name="img" src={kızartma} className="me-1" />
              Kızartmalar
            </button>

            <button
              onClick={clickHandler}
              name="FastFood"
              className="favoriteBtns  me-2 "
            >
              <img name="img" src={fastfood} className="me-1" />
              Fast Food
            </button>

            <button
              onClick={clickHandler}
              name="gazlıIcecek"
              className="favoriteBtns  me-2 "
            >
              <img name="img" src={gazliIcecek} className="me-1" />
              Gazlı İcecek
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FavoriteMenu;
