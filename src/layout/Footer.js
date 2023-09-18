import React from "react";
import location from "../Assets/adv-aseets/icons/icon-1.png";
import email from "../Assets/adv-aseets/icons/icon-2.png";
import tel from "../Assets/adv-aseets/icons/icon-3.png";
import insta0 from "../Assets/adv-aseets/insta/li-0.png";
import insta1 from "../Assets/adv-aseets/insta/li-1.png";
import insta2 from "../Assets/adv-aseets/insta/li-2.png";
import insta3 from "../Assets/adv-aseets/insta/li-3.png";
import insta4 from "../Assets/adv-aseets/insta/li-4.png";
import insta5 from "../Assets/adv-aseets/insta/li-5.png";
import { Link } from "react-router-dom";
import "boxicons";
import "../css/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="page-footer ">
      <div className="footer-container">
        <div className="footerContent">
          <div>
            <Link className="text-decoration-none text-white" to="/" exact>
              <h1
                style={{
                  fontWeight: "bold",
                  fontFamily: "Londrina Solid ,cursive",
                }}
              >
                TEKNOLOJİK YEMEKLER
              </h1>
            </Link>
            <div className="py-2 w-75 text-wrap d-flex ">
              <Link
                to="/contact"
                className="text-white text-decoration-none"
                exact
              >
                <img className="me-2" src={location} />
                341 Londonderry Road, İstanbul, Türkiye
              </Link>
            </div>
            <div className="py-2 d-flex ">
              <Link
                className="text-white text-decoration-none"
                to="/contact"
                exact
              >
                <img className="me-2" src={email} />
                aciktim@teknolojikyemekler.com
              </Link>
            </div>
            <div className="py-2 d-flex">
              <Link
                className="text-white text-decoration-none"
                to="/contact"
                exact
              >
                <img className="me-2" src={tel} />
                +90 216 123 45 67
              </Link>
            </div>
          </div>
          <div className="sicacikMenuler">
            <Link to="/secenekler" exact>
              <h4 className="py-4">Sıcacık Menüler</h4>
            </Link>
            <Link to="/secenekler">Terminal Pizza</Link>
            <Link to="/secenekler">5 Kişilik Hackathlon Pizza</Link>
            <Link to="/secenekler">UseEffect Tavuklu Pizza</Link>
            <Link to="/secenekler">Beyaz Console Frosty</Link>
            <Link to="/secenekler">Testler Geçti Mutlu Burger</Link>
            <Link to="/secenekler">Position Absolute Acı Burger</Link>
          </div>
        </div>
        <div className="insta text-center ">
          <a
            className=" text-white text-decoration-none"
            href="https://www.instagram.com/fast_food_yemekler/"
            target="blank"
          >
            <h5 className="py-4">Instagram</h5>
            <div className="listsInstagram">
              <li className="list-group-item">
                <img src={insta0}></img>
              </li>
              <li className="list-group-item">
                <img src={insta1}></img>
              </li>
              <li className="list-group-item">
                <img src={insta2}></img>
              </li>
              <li className="list-group-item">
                <img src={insta3}></img>
              </li>
              <li className="list-group-item">
                <img src={insta4}></img>
              </li>
              <li className="list-group-item">
                <img src={insta5}></img>
              </li>
            </div>
          </a>
        </div>
      </div>
      <hr className="text-white" /> {/*tematik ara tag'i*/}
      <div className="text-white d-flex justify-content-between">
        <span>&copy;{year} Teknolojik Yemekler.</span>
        <a target="blank" href="https://twitter.com/">
          <box-icon name="twitter" type="logo" color="#32caef"></box-icon>
        </a>
      </div>
    </div>
  );
}
