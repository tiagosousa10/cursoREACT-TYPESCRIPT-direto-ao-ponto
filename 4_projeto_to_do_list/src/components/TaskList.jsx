import Task from './Task';

const TaskList = ({tasks, onDeleteTask, onToggleTaskDone}) => {
 
  // senao tiver Tasks(Tarefas)
  if(tasks.length === 0){
    return <p>Nao há tarefas</p>;
  }
  
  return (
    <ul>

      {tasks.map((task)=> (
        <Task 
          key={task.id} 
          task={task} 
          onDelete={()=> onDeleteTask(task.id)}
          onToggleDone={()=> onToggleTaskDone(task.id)} />
      ))}
      
    </ul>
  );
};

export default TaskList;