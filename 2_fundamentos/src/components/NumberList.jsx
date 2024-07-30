import React from 'react'

// objetivo: aprender a manipular array utilizando array functions: map, reduce, filter

// input: array de numero
// processing: pra cada numero no array, crie um li e liste o número
// output: crie uma ul com os li dentro e renderize na tela.
function NumberList({numbers, multiplicador}) {
  return (
    <div>
        <h2>Tabuada do {multiplicador}</h2>
        <ul>
            {numbers.map((number, index) => (
                
                <li key={index}>Numero: {number} | index: {index} Resultado: {number * multiplicador}</li>
))}
        </ul>
    </div>
  )
}

export default NumberList;