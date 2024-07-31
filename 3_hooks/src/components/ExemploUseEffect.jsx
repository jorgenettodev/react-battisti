import React, { useState, useEffect } from "react";

const ExemploUseEffect = () => {
  // cria um estado
  const [contador, setContador] = useState(0);

//   cria um hook effect
    useEffect(() => {
        document.title = `Você clickou ${contador} vezes.`
    });

  return (
    <div>
      <p>Você clickou {contador} vezes.</p>
      <button onClick={() => setContador(contador + 1)}>Clique aqui para subir o contador</button>
    </div>
  );
};

export default ExemploUseEffect;
