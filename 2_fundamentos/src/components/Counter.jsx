import React from "react";
import { useState } from "react";

const Counter = () => {
    // input
        // useState
    const [counter, setCounter] = useState(0);
    // processing
    // output
        // exibe o contador de clicks na tela na tela
        console.log('counter')
    return (
        <div>
            <p>Você clicou {counter} vezes.</p>

            <button onClick={() => setCounter(counter + 1)}>Aumentar</button>
        </div>
    )
};

export default Counter;