import Button from "./Button"

const Task = ({ task, onDelete, onReminder }) => {

  return (
    <div className="task" title="You can unable/disable reminder by double click" onDoubleClick={() => onReminder(task.id)}>
      
      {task.reminder?<span className="task__reminder"></span>:''}
      <div className="task__info">
        <h2 className="task__title">{task.title}</h2>
        <p className="task__time">{task.time}</p>
      </div>
      <Button 
      btnClassName='task__delete' 
      btnText='x' 
      onClick={() => onDelete(task.id)} />
    </div>
  )
}

export default Task