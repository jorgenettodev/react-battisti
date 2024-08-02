// este componente lê o valor do contexto
import React, { useContext } from 'react'
import { MeuContexto } from '../contexts/MeuContexto'

const ValorDoContexto = () => {

    // importa os valores do contexto
    const { mensagem } = useContext(MeuContexto);
  return (
    <div>mensagem no ValorDoComponente.jsx: {mensagem}</div>
  )
}

export default ValorDoContexto