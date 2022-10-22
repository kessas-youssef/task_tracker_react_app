import { useState } from "react"
import Input from "./Input"

const Form = ({ addTask }) => {

  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = e => {
    e.preventDefault()

    if(!title)
      return
    else 
      addTask({title, time, reminder})
  }

  return (
    <form className="taskForm" onSubmit={onSubmit}>
      <Input inputIdClassName='taskForm__title' inputType='text' nameOfSet='taskForm__inputSet' labelText='Task' inputVal={title} onAction={e => setTitle(e.target.value)} />

      <Input inputIdClassName='taskForm__time' inputType='text' nameOfSet='taskForm__inputSet' labelText='Day & Time' inputVal={time} onAction={e => setTime(e.target.value)} />

      <Input inputIdClassName='taskForm__reminder' inputType='checkbox' nameOfSet='taskForm__checkBox' labelText='Set reminder' inputVal={reminder} onAction={e => setReminder(e.target.checked)} />

      <Input inputIdClassName='taskForm__submit' inputType='submit' inputVal='Save Task' />
    </form>
  )
}

export default Form