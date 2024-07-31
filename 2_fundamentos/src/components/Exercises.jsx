import React, { useState } from "react";

const Exercises = () => {
  // Exercicio 1
  //  crie um componente que recebe um prop name e retorna 'olá, name!'
  const Greeting = ({ name }) => {
    return <h1>Olá, {name}!</h1>;
  };

  // exercicio 2
  // crie um contador
  const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClickUp = () => {
      // alert('clickou')
      setCount(count + 1);
    };

    const handleClickDown = () => {
        setCount(count - 1);
    };

    return (
      <div>
        <h3>Você clicou {count} vezes no botao abaixo.</h3>
        <button onClick={handleClickUp}>Clique aqui para aumentar o contador.</button>
        <button onClick={handleClickDown}>Clique aqui para diminuir o contador.</button>
      </div>
    );
  };

  // Exercicio 3
  // crie um component TaskList que aceita um array de objetos com id e text.
  // renderize uma lista ordenada de tarefas, mostrando o texto de cada tarefa
  // se não houver tarefas, exiba a mensagem "Não há tarefas para mostrar."
  const tasks = [
    { id: 0, text: "termine este curso" },
    { id: 1, text: "termine o odin" },
  ];

  const TaskList = ({ tasks }) => {

    if (!tasks || tasks.length === 0) {
      return <h2>Não há tarefas a mostrar.</h2>;
    }

    return (
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              tarefa:{task.id} {task.text}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      {/* ex01 */}
      <div>
        <h2>Exercicio 1 - Greeting</h2>
        <Greeting name={"Savage"} />
      </div>

      {/* ex02 */}
      <div>
        <h2>Exercicio 2 - Counter</h2>
        <Counter />
      </div>

      {/* ex03 */}
      <div>
        <TaskList
          tasks={tasks}
        />
      </div>
    </div>
  );
};

export default Exercises;
