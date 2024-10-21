import {useState,useEffect} from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks,setTasks] = useState(
    //transforma json em array
    JSON.parse(localStorage.getItem('tasks')) ||[]);

  useEffect(()=>{
    //transforma array em string
    localStorage.setItem('tasks',JSON.stringify(tasks));
    //atualiza sempre as tasks
  },[tasks]);

  const addTask = (task) => {
  //                       id,        text,         done,
    setTasks([...tasks,{id:Date.now(),text:task,done:false}]);

    //localStorage
    localStorage.setItem('tasks',JSON.stringify(tasks));

  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task)=> task.id !== taskId));
  };

  const toggleTaskDone =(taskId) => {
    //verifica se o task.id === taskId(recebido)
    // se for , modifica(!task.done), senao nao faz nada
    setTasks(tasks.map((task)=>task.id === taskId ? {...task, done:!task.done} : task ));
  };

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <TaskInput onAddTask={addTask}/>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTaskDone={toggleTaskDone} />
    </>
  );
}

export default App;
