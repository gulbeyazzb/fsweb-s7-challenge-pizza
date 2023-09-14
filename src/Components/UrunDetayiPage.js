import React from "react";

import "../css/siparis.css";
const UrunDetayiPage = ({ urun }) => {
  return (
    <div>
      <div className="d-flex flex-column">
        <div className="py-2 secilenMenu">
          <h4>{urun.urunName}</h4>
          <div className="py-4 d-flex gap-5 justify-content-between">
            <h2 className="fw-bold ">{urun.price} ₺</h2>
            <h6 className="text-muted">{urun.point}</h6>
            <h6 className="text-muted">{urun.orderNum}</h6>
          </div>
          <p className="description text-wrap fs-5 text-muted">
            {urun.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UrunDetayiPage;
