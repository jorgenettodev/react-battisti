import React from "react";
import { useState, createContext } from "react";

// cria o contexto
export const MeuContexto = createContext();

// Crie o provedor que vai dizer oque e quem irá utilizar, onde será utilizado
export const MeuContextoProvider = ({ children }) => {
  // seta um estado/setEstado
  const [mensagem, setMensagem] = useState("Mensagem inicial.");

  // seta o valor desse contexto (que poderá ser usado pelas children que estiverem usando esse contexto)
  const valorContexto = {mensagem, setMensagem};


  //   retorna o contexto como se fosse jsx
  return (
    <MeuContexto.Provider value={valorContexto}>
        {children}
    </MeuContexto.Provider>
  );
};

// Passo 1: Importar React
// Passo 2: Criar o contexto usando React.createContext()
// Passo 3: Exportar o contexto
