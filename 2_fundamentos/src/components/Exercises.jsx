import React, { useState } from 'react'

const Exercises = () => {


    // Exercicio 1
        //  crie um componente que recebe um prop name e retorna 'olá, name!'
    const Greeting = ({name}) => {
        return (
            <h1>Olá, {name}!</h1>
        )
    };

    // exercicio 2
        // crie um contador
    const Counter = () => {
        const [count, setCount] = useState(0);

        const handleClick = () => {
            // alert('clickou')
            setCount(count + 1 );
        };

        return (
        <div>
            <h3>Você clicou {count} vezes no botao abaixo.</h3>
            <button onClick={handleClick}>Clique aqui.</button>
        </div>)
    };

    // exercicio 3
        // crie um component TaskList que aceita um array de objetos com id e text.
        // renderize uma lista ordenada de tarefas, mostrando o texto de cada tarefa
        // se não houver tarefas, exiba a mensagem "Não há tarefas para mostrar."
    const TaskList = ({tasks}) => {
        if (!tasks) {
            return <h2>Não há tarefas a mostrar.</h2>
        }
    };
    
  return (
    <div>
        {/* ex01 */}
        <div>
            <h2>Exercicio 1 - Greeting</h2>
            <Greeting name={'Savage'}/>
        </div>

        {/* ex02 */}
        <div>
            <h2>Exercicio 2 - Counter</h2>
            <Counter />
        </div>

        {/* ex03 */}
        <div>
            <TaskList tasks={false}/>
        </div>

    </div>
  )
};

export default Exercises;