import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Work Hard !',
      time: 'Always',
      reminder: true
    },
    {
      id: 2,
      title: 'Wake up early',
      time: 'Always',
      reminder: true
    }
  ])

  const [idCount, setIdCount] = useState(tasks.length + 1)

  // Delete Task:
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
    console.log(tasks.length);
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
    setIdCount(() => idCount + 1)
  }

  // Open or Close form 
  const openCloseForm = e => {
    if(e.target.className === 'header__btn--open') {
      document.querySelector('.header__btn--close').style.display = 'block'
      e.target.style.display = 'none'
      document.querySelector('.taskForm').style.display = 'block'
    }
    else {
      document.querySelector('.header__btn--open').style.display = 'block'
      e.target.style.display = 'none'
      document.querySelector('.taskForm').style.display = 'none'
    }
    
  } 

  return (
    <div className="appContainer">
      <Header openClose={openCloseForm} />
      <Form addTask={addTask} />
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
