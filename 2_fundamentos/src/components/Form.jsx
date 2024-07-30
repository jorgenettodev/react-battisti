import React, { useState } from "react";

const Form = () => {
    const [value, setValue] = useState("");
    
    const handleSubmit = (e) => {
        console.log('enviou o formulario')
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Preencha o campo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <button>Enviar form</button>
        </form>
    )
}
export default Form;