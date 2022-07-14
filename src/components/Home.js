import React, { useEffect } from "react";
import styled from "styled-components";
import ThreeScene from "./ThreeScene";
import { useNavigate } from "react-router-dom";

const Contenedor = styled.div`
  position: relative;
  width: 100vw;
  height: 110vh;
  padding: 0;
  margin: 0;
  top: -5vh;
  background: white;
  background-size: contain;
  background-attachment: fixed;
  background-size: cover;
  overflow-y: auto;
  overflow-x: auto;

`;
const Heading = styled.h2`
  text-align: center;
  color: gray;
  font-style: italic;
  position: relative;
  top: 5vh;
`;
const Heading2 = styled.h3`
  text-align: center;
  color: gray;
  font-style: italic;
  position: absolute;
  bottom: 20vh;
  width: 90vw;
  left:5vw;
  z-index: 99;
`;

const Heading3 = styled.h3`
  text-align: center;
  color: gray;
  font-style: italic;
  position: absolute;
  bottom: 17vh;
  width: 70vw;
  left:15vw;
  z-index: 99;
`;


export default function Home() {
  let navigate = useNavigate();
  function handle() {
    navigate("/jugadores", { replace: true });
  }
  useEffect(() => {
    window.addEventListener("scroll", handle);
  });

  return (
    <Contenedor>
      <Heading>We color football</Heading>
      <ThreeScene style={{zIndex: "10"}} />
    <Heading2>
      Haz swipe up
    </Heading2>
    <Heading3>Pero no mucho!!</Heading3>
    </Contenedor>
  );
}
