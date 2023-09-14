import React from "react";
import { styled } from "styled-components";
import "../css/order.css";

const OrderConfirmed = () => {
  const Section = styled.section`
    background-color: #ce2829;
    color: white;
    height: 83vh;
  `;
  const P = styled.p`
    font-family: "Barlow", sans-serif;
    font-size: 4rem;
  `;
  const Pl = styled.p`
    font-family: "Satisfy", cursive;
    color: #fdc913;
    margin-bottom: 0;
    font-size: 2rem;
  `;

  return (
    <Section>
      <div className="container pt-4">
        <Pl>Lezzetin yolda</Pl>
        <P>SİPARİŞ ALINDI</P>
      </div>
    </Section>
  );
};
export default OrderConfirmed;
