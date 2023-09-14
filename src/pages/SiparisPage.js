import React from "react";
import Footer from "../layout/Footer";
import SiparisVer from "../Components/SiparisVer";
import SiparisForm from "../Components/SiparisForm";
import "../css/siparis.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuList } from "../helper/MenuList";

const SiparisPage = () => {
  const [urun, setUrun] = useState({});
  const { menuItemId } = useParams();

  useEffect(() => {
    const food = MenuList.find((menu) => menu.id == menuItemId);
    setUrun(food);
  }, [menuItemId, MenuList]);
  return (
    <>
      <SiparisVer urun={urun} />
      <SiparisForm urun={urun} />
      <Footer />
    </>
  );
};

export default SiparisPage;
