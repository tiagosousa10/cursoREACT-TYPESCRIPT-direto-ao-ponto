import {useState} from 'react';
//                    ex.1
const Greeting = ({name})=> {
  return <h1>Olá {name}!</h1>;
};

//                    ex.2
const Counter= () => {
  const [count,setCount]=useState(0);

  return(
    <div>
      <p>Voce clicou {count} vezes no botao</p>
      <button onClick={()=>setCount(count+1)} >Clique em mim!</button>
      <button onClick={()=>setCount(count-1)}  >Decrementar</button>
    </div>
  );
};


//                    ex.3
const TaskList=({tasks})=>{
  if(tasks.length ===0){
    return <p>Não há tarefas</p>;
  }
  return(
    <ul>
      {tasks.map((task)=>(
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
};

//                    MAIN
const Exercises = () => {
  const tasks=[
    {id:1,text:'Comprar Leite'},
    {id:2,text:'Estudar React'},

  ];
  return (
    <div>
      <h2>Exercicio 1</h2>
      <Greeting name={'joao'} />
      
      <h2>Exercicio 2</h2>
      <Counter/>
      <h2>Exercicio 3</h2>
      <TaskList  tasks={tasks} />
    </div>
  );
};

export default Exercises;