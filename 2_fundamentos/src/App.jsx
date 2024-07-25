import "./App.css";
import Welcome from "./components/Welcome";
import BomDia from "./components/BomDia";
import Horario from "./components/Horario";
import Pai from "./components/Pai";
import Descricao from './components/Descricao';
import Cachorro from './components/Cachorro'

function App() {
  return (
    <>
      <Welcome />
      <BomDia />
      <Horario />
      <Pai />
      <Descricao nome="Vilmar" idade={27} />
      <Cachorro nome="Bidu" raca="Vira-Lata" />
    </>
  );
}

export default App;
