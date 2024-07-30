import React from "react";

const RenderizacaoCondicional = ({user}) => {
    return (
        <div>{user && <h1>Bem-vindo de volta, {user}</h1>}</div>
    )
}

export default RenderizacaoCondicional;