import React from "react";
import { Card, CardBody, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";
import { MenuList } from "../helper/MenuList";
const Secenekler = () => {
  return (
    <div>
      <div className="pb-5 menuCard-page">
        <div className="container">
          <div class="menu-cards">
            {MenuList.map((menuItem, index) => (
              <Link key={index} className="card-link" to="/siparis-ver" exact>
                <Card>
                  <img className="w-75 m-auto pt-3" src={menuItem.img} />
                  <CardBody className="p-3 text-black text-start">
                    <CardSubtitle className="mt-4" tag="h6">
                      {menuItem.name}
                    </CardSubtitle>
                    <div className="mt-0 pt-0 d-flex justify-content-between">
                      <CardSubtitle className="mt-4 text-muted" tag="h6">
                        {menuItem.point}
                      </CardSubtitle>
                      <CardSubtitle className="mt-4 text-muted" tag="h6">
                        {menuItem.orderNum}
                      </CardSubtitle>
                      <CardSubtitle className="mt-4" tag="h6">
                        {menuItem.price}
                      </CardSubtitle>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secenekler;
