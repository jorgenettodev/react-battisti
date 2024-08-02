import React, {useContext} from 'react'
import { MeuContexto } from '../contexts/MeuContexto'

const ComponenteFilho = () => {
    const {mensagem, setMensagem} = useContext(MeuContexto);
    
  return (
    <div>
        <p>Mensagem no ComponenteFilho: {mensagem}</p>
        <button onClick={()=> setMensagem("Nova mensagem")}>Mudar mensagem</button>
    </div>
    
  )
}

export default ComponenteFilho