import React, { useState, useEffect } from "react";

const ExemploUseEffect = () => {
  // cria um estado
  const [contadorPrimario, setContador] = useState(0);
  const [contadorSecundario, setContadorSecundario] = useState(0);

  //   cria um hook effect
  useEffect(() => {
    console.log("useEffect executado");
    document.title = `Você clickou ${contadorPrimario} vezes.`;
  }, [contadorSecundario]);


  return (
    <div>
      <p>Você clickou no contador principal {contadorPrimario}  vezes.</p>
      <button
        onClick={() => {
          setContador(contadorPrimario + 1);
        }}
      >
        Clique aqui para subir o contador
      </button>

      <p>Contador secundario: {contadorSecundario} vezes.</p>
      <button onClick={() => setContadorSecundario(contadorSecundario + 2)}>Click para secundario</button>
    </div>
  );
};

export default ExemploUseEffect;
