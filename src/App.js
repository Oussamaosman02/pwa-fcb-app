import styled from "styled-components";
import "./App.css";
import React from "react";
import Jugadores from "./jugadores.json";

const Card = styled.div`
  border-radius: 25px;
  text-align: center;
  background-color: whitesmoke;
  padding: 1%;
  width: 70vw;
  position: relative;
  left: 14.5vw;
  margin: 5vh 0;
  color: #a50044;
  background-image: url(https://wallpaperaccess.com/full/3802645.png);
  box-shadow: 0px 0px 20px black;
`;
const Imagen = styled.img`
  width: 50%;
  margin-bottom: -1.7vh;
`;
const Parafo = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Sup = styled.sup`
  text-align: center;
  color: #004d98;
  font-weight: 900;
  padding: 3px;
`;
const Heading5 = styled.h5`
  text-align: center;
  background-color: #a50044;
  width: 50%;
  position: relative;
  left: 24%;
  border-radius: 25px;
  color: #edbb00;
  font-weight: 900;
  padding: 1% 0;
`;
const Heading4 = styled.h4`
  text-align: center;
  background-color: #004d98;
  width: 10%;
  position: absolute;
  left: 6%;
  top: 0%;
  border-radius: 25px;
  color: #edbb00;
  font-weight: 900;
  padding: 1%;
`;
const Line = styled.hr`
  width: 90%;
  background-color: #edbb00;
  border: 1px solid #edbb00;
  border-radius: 25px;
`;
function App() {
  let jugador = Jugadores;
  return (
    <div className="App">
      <h1>Barcelona Players</h1>
      {jugador.map((j) => {
        return (
          <Card key={j.id}>
            <Imagen src={j.foto} alt={j.name} />
            <Line />
            <h3
              style={{
                color: "#edbb00",
              }}
            >
              {j.name}
            </h3>
            <Parafo>
              <span
                style={{
                  fontWeight: "900",
                }}
              >
                Altura:{" "}
                <span
                  style={{
                    color: "#edbb00",
                  }}
                >
                  {j.altura}
                </span>
                <Sup>cm</Sup>
              </span>
              <span
                style={{
                  fontWeight: "900",
                }}
              >
                Peso:{" "}
                <span
                  style={{
                    color: "#edbb00",
                  }}
                >
                  {j.peso}
                </span>
                <Sup>kg</Sup>
              </span>
            </Parafo>
            <Heading5>{j.position}</Heading5>
            <Heading4>{j.id > 90 ? "no" : j.id}</Heading4>
          </Card>
        );
      })}
    </div>
  );
}

export default App;
