import "./App.css";
// eslint-disable-next-line no-unused-vars
/* eslint-disable no-unused-vars */
import React from "react";
import Horario from "./components/Horario";
import Cachorro from "./components/Cachorro";
import Button from "./components/Button";
import PaiFunction from "./components/PaiFunction";
import Form from "./components/Form";
import RenderizacaoCondicional from "./components/RenderizacaoCondicional";
import BotaoTernario from "./components/BotaoTernario";
import Warning from "./components/Warning";
import NumberList from "./components/NumberList";
import BotaoEstilizado from "./components/BotaoEstilizado";
import BotaoComClasse from "./components/BotaoComClasse";
import Exercises from "./components/Exercises";



function App() {
  return (
    <>
      <Cachorro nome="Bidu" raca="Vira-lata"/>
      <Horario />
      <Button />
      {/* 6.9 - Passando funcao de manipulacao de evento como props.  */}
      <PaiFunction />
      {/* 6.10 - Eventos de form (handleSubmit etc) */}
      <Form />
      {/* 6.11 - Renderização condicional */}
      <RenderizacaoCondicional user={"Netto"} />
      {/* 6.12 - Botao ternario */}
      <BotaoTernario estahLogado={false}/>
      {/* 6.13 - Render Nulo */}
      <Warning warning={'aviso'}/>
      {/* 6.14 - Listas chave */}
      <NumberList numbers={[1,2,3,4,5,6,7,8,9,10]} multiplicador={5}/>
      {/* 6.15 - Estilos por atributo */}
      <BotaoEstilizado />
      {/* 6.16 - Estilização atraves de classe css */}
      <BotaoComClasse />
      {/* Exercicios */}
      <Exercises/>
    </>
  );
}

export default App;
