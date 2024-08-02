import React from "react";
import "./App.css";
import ExemploUseEffect from "./components/ExemploUseEffect";
import Timer from "./components/Timer";
import { MeuContextoProvider } from "./contexts/MeuContexto"; // importa o provedor do contexto
import ValorDoContexto from "./components/ValorDoContexto";
import ComponenteFilho from "./components/ComponenteFilho";

function App() {
  return (
    <>
      {/* 8.1 - Hook Use Effect */}
      <ExemploUseEffect />
      <Timer />
      {/* 8.2 Hook useContext */}
        {/* utilizado em componentes pequenos e médios que compartilham estado */}
      <MeuContextoProvider>
        <ValorDoContexto />
        <ComponenteFilho />
      </MeuContextoProvider>
    </>
  );
}

export default App;
