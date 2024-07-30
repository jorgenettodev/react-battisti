import React from 'react'

// input: none
// processing: crie um elemento button e passe pra ele uma className (equivalente a class no html), depois adicione os estilos desta classe lá no index.css
// output: botão estilizado via css e renderizado na tela 
function BotaoComClasse() {
  return (
    <button className='botao-azul'>BotaoComClasse</button>
  )
}

export default BotaoComClasse