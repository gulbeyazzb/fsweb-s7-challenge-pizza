import React from "react";
import { NavLink } from "react-router-dom";
import UrunDetayiPage from "./UrunDetayiPage";
import { useHistory } from "react-router-dom";

const SiparisVer = ({ urun }) => {
  const history = useHistory();

  const navBack = () => {
    history.goBack();
  };
  return (
    <div>
      <div className="Siparis-page">
        <div className="siparisContainer">
          <div className="img-div"></div>
          <nav className="navLinks">
            <button className="historybtn me-3" onClick={navBack}>
              {"< Menü'ye Dön"}
            </button>
            <NavLink className="nav-item" to="/" exact>
              Anasayfa -
            </NavLink>
            <NavLink className="nav-item" to="/secenekler" exact>
              Seçenekler -
            </NavLink>
            <NavLink className="nav-item" to="/siparis-ver">
              Sipariş Oluştur
            </NavLink>
          </nav>
          <UrunDetayiPage urun={urun} />
        </div>
      </div>
    </div>
  );
};
export default SiparisVer;
