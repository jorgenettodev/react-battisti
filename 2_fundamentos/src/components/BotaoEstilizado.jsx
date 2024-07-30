import React from 'react'

// input: none
// processing: cria um botão html, dá estilos inline utilizando style={{color: #fff; backgroundColor: #000 }}
// output: renderize o botao na página

function BotaoEstilizado() {
    // observação: por se tratar de um objeto, aqui utilizamos camelCase
    const estiloDoBotao = {
        color: 'red',
        backgroundColor: '#000',
        padding: '8px 16px'
    }
  return (
    <div>
        <button style={estiloDoBotao}>Botao Estilizado</button>
    </div>

  )
}

export default BotaoEstilizado;