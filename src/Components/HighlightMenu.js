import React from "react";
import "../css/menu.css";
import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
const HighlightMenu = () => {
  return (
    <div>
      <div className="highlight-page">
        <div className="container">
          <div class="grid-container">
            <Card className="bg-card1 grid-item1">
              <CardBody className="p-0 text-white text-start w-75">
                <CardTitle tag="h1">Özel Lezzetus</CardTitle>
                <CardSubtitle className="mb-2  " tag="h6">
                  Position:Absolute Acı Burger
                </CardSubtitle>
                <Link to="/secenekler" exact>
                  <button className="fw-bold btn bg-white text-danger my-3 rounded-pill px-3">
                    Sipariş Ver
                  </button>
                </Link>
              </CardBody>
            </Card>
            <Card className="bg-card2 grid-item2">
              <CardBody
                className="p-2 text-white text-start  text-wrap"
                style={{ width: "10rem" }}
              >
                <CardTitle tag="h5">Hackathlon Burger Menu</CardTitle>
                <CardSubtitle className="mb-2  " tag="h6"></CardSubtitle>
                <Link to="/secenekler" exact>
                  <button className="fw-bold btn bg-white text-danger my-3 rounded-pill px-3">
                    Sipariş Ver
                  </button>
                </Link>
              </CardBody>
            </Card>
            <Card className="bg-card3 grid-item">
              <CardBody className="p-2 text-white text-start w-100">
                <CardTitle tag="h5" className="mb-0 text-black">
                  <span className="text-danger"> Çoooooook </span>hızlı
                </CardTitle>
                <CardTitle tag="h5" className=" text-black">
                  npm gibi kurye
                </CardTitle>
                <Link to="/secenekler" exact>
                  <button className="fw-bold btn bg-white text-danger my-1 rounded-pill px-3">
                    Sipariş Ver
                  </button>
                </Link>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HighlightMenu;
