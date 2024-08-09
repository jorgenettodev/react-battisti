import React, { useState, useEffect } from "react";

const PerfilDeUsuario = ({ usuarioId }) => {
  let [usuario, setUsuario] = useState(null);

  useEffect(() => {

    // funcao assincrona busca usuario
    const buscarUsuarios = async () => {
      // faz um fetch => espera pelos dados
      const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${usuarioId}`);
      // transforma os dados em json
      const dadosUsuario = resposta.json();
      setUsuario(dadosUsuario);
    };
    
  });

  return (
    <div>{usuario ? <p>Usuario</p> : <p>Carregando perfil do usuario</p>}</div>
  );
};

export default PerfilDeUsuario;
