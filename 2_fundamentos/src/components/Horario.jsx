import { useState, useEffect } from 'react';

function Horario() {

    // cria duas constantes, uma que armazena um estado (ou valor) e uma que atualiza esse estado
    // useState hook
    const [localTime, setLocalTime] = useState('');

    // cria um objeto Date
    function getLocalTime() {
        const dataAtual = new Date();
        const horas = String(dataAtual.getHours()).padStart(2, '0');
        const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
        const seconds = String(dataAtual.getSeconds()).padStart(2, '0');
        return `${horas}:${minutos}:${seconds}`;
    }

    // useEffect hook
    // crie um setInterval para atualizar o localTime a cada 1 segundo utilizando a funcao getLocalTime como callback no setInterval
    useEffect(() => {
        const interval = setInterval(() => {
            // agora a setLocalTime equivale ao retorno da getLocalTime e roda a cada 1 segundo.
            setLocalTime(getLocalTime()); 
        }, 1000);

        // limpa o intervalo quando o componente é desmontado (acho q se refere a problema de memória)
        return () => clearInterval(interval);

    }, []);

    return (
    <div>
        <h3>Horário atual: {localTime}</h3>
    </div>
    );
}

export default Horario;