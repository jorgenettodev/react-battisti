import { useState, useEffect } from "react";

export default function useWindowSize() {
    // pega os valores iniciais da janela
    const [ windowSize, setWindowSize ] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
});

    // precisa de um useEffect para monitorar as mudanças no tamanho da janela.
        // o useEffect precisa de uma limpeza de memória
    useEffect(() => {
        // cria uma função handleWindowSize que atualiza os valores do windowSize
        const handleWindowSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', handleWindowSize);

        handleWindowSize();

        // limpeza de memória

        return () => window.removeEventListener('resize', handleWindowSize);

    }, [])

    return windowSize;
}
