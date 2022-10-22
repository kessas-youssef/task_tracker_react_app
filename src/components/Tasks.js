import Task from "./Task"

const Tasks = ({ tasks, onDelete, onReminder }) => {
  return (
    <section className="tasks">
      {
        tasks.map((task) =>
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onReminder={onReminder} />)
      }
    </section>
  )
}

export default Tasks