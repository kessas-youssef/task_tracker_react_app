import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  let previousTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []

  useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks))
  )


  const [tasks, setTasks] = useState([...previousTasks])

  const [idCount, setIdCount] = useState(tasks.length)

  const [formState, setFormState] = useState(false)

  // Delete Task:
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
    if (tasks.length === 1)
      setIdCount(0)
  }

  // Toggle Reminder
  const toggleReminder = (id) =>
    setTasks(
      tasks
        .map(task => {
          if (task.id === id)
            return { ...task, reminder: !task.reminder }
          else
            return task
        })
    )

  // Add Task
  const addTask = task => {
    setTasks(prevTasks => [...prevTasks, { id: idCount, ...task }])
    setIdCount(idCount + 1)
  }

  // Open or Close form (not the best way)
  // const openCloseForm = e => {
  //   if (e.target.className === 'header__btn--open') {
  //     document.querySelector('.header__btn--close').style.display = 'block'
  //     e.target.style.display = 'none'
  //     document.querySelector('.taskForm').style.display = 'block'
  //   }
  //   else {
  //     document.querySelector('.header__btn--open').style.display = 'block'
  //     e.target.style.display = 'none'
  //     document.querySelector('.taskForm').style.display = 'none'
  //   }

  // }


  // Better way of toggling form display
  const formDisplay = () => formState ? setFormState(false) : setFormState(true)


  return (
    <div className="appContainer">
      <Header openClose={formDisplay} formState={formState ? { action: 'close', btnText: 'Close' } : { action: 'open', btnText: 'Add' }} />
      {formState && <Form addTask={addTask} />}

      {idCount ?
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onReminder={toggleReminder}
        />
        :
        <p className="tasks__empty">You have no tasks yet.</p>
      }
      <Footer />
    </div>
  );
}

export default App;
