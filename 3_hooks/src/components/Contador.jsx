import React, { useReducer } from "react";

// Define o estado inicial
const estadoInicial = { contador: 0 };

// Função reducer que mostra como as ações modificam o estado
function reducer(estado, acao) {
  switch (acao.tipo) {
    case "incrementar":
      return {contador: estado.contador + 1};
    default:
      throw new Error("ação inválida, tente novamente.");
  }
}

const Contador = () => {
  // Inicializar o reducer com o estado inicial e a função que parece com setEstado
  const [estado, dispatch] = useReducer(reducer, estadoInicial);
  
  return <div>Contador</div>;
};

export default Contador;
