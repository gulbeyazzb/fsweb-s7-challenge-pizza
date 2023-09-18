import React, { useEffect, useState } from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle } from "reactstrap";
import { MenuList } from "../helper/MenuList";
const MenuCard = ({ type }) => {
  const [filterMenu, setFilterMenu] = useState(MenuList);

  useEffect(() => {
    const list = MenuList.filter((menuItem) => {
      return menuItem.category === type;
    });
    setFilterMenu(list);
  }, [type]);

  return (
    <div id="food-card">
      <div
        style={{ backgroundColor: "#faf7f2" }}
        className="pb-5 menuCard-page"
      >
        <div className="container">
          <div class="menu-cards">
            {filterMenu.map((menuItem, index) => (
              <Link
                data-cy={index}
                key={index}
                className="card-link"
                to={"/siparis-ver/" + menuItem.id}
                exact
              >
                <Card>
                  <img className="w-75 m-auto pt-3" src={menuItem.img} />
                  <CardBody className="p-3 text-black text-start">
                    <CardSubtitle className="mt-4" tag="h6">
                      {menuItem.urunName}
                    </CardSubtitle>
                    <div className="mt-0 pt-0 d-flex justify-content-between">
                      <CardSubtitle className="mt-4 text-muted" tag="h6">
                        {menuItem.point}
                      </CardSubtitle>
                      <CardSubtitle className="mt-4 text-muted" tag="h6">
                        {menuItem.orderNum}
                      </CardSubtitle>
                      <CardSubtitle className="mt-4" tag="h6">
                        {menuItem.price} ₺
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
export default MenuCard;
