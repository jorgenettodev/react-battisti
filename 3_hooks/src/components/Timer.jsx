import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
    // crie um timer que inicia um contador de segundos.
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);
        }, 1000)

        // limpeza de estado
        return () => clearInterval(intervalId);
    }, [])
    // array de dependências vazio
        // indica que o useEffect só deve ser rodado uma vez.
    
  return <div>Timer: {segundos} segundos</div>;
};

export default Timer;
