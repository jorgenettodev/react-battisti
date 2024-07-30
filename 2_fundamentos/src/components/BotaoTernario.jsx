import React from 'react'

function BotaoTernario({estahLogado}) {


  return (<div>
      <h3>{estahLogado ? "Você está logado" : "Fazer login"}</h3>
      {estahLogado ? <button>Sair</button> : <button>Entrar</button>}
      
  </div>
  )
}

export default BotaoTernario;