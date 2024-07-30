import React from 'react'

function Warning({warning}) {

    // se o prop for null, retorne null, caso contrário, retorne um aviso!
    if (!warning) {
        return null;
    }
    
  return (
    <div>Aviso!</div>
  )
}

export default Warning;