import React from "react";
import "./App.css";
import ExemploUseEffect from "./components/ExemploUseEffect";
import Timer from "./components/Timer";
import { MeuContextoProvider } from "./contexts/MeuContexto"; // importa o provedor do contexto
import ValorDoContexto from "./components/ValorDoContexto";
import ComponenteFilho from "./components/ComponenteFilho";
import WindowSizeComponent from "./components/WindowSizeComponent";
import Container from "./components/Container";
import PerfilDeUsuario from "./components/PerfilDeUsuario";

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
      {/* 8.3 Hook useReducer */}
        {/* estados mais complexos (do que o useState) */}
      {/* 8.4 - Custom hook */}
      <WindowSizeComponent />
      {/* 8.5 - Props children */}
      <Container>
        <Timer />
      </Container>
      <PerfilDeUsuario usuarioId={0}/>
    </>
  );
}

export default App;
