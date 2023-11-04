import React from 'react'
import './Task.css';
import { AiOutlineCheck } from "react-icons/ai";
import HotsBlogs from './HotsBlogs';

const Task = () => {
  const [form, setForm] = React.useState({
    title: "",
    description: ""
  });
  function handleform(event) {
    setForm(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }
  function handlefunc(event) {
    event.preventDefault()
  }
  return (
    <>
      <div className='taskwrapper'>
        <div className='taskone'>
          <form onSubmit={handlefunc}>
            Title<input className='title' type='text'
              placeholder='Title'
              name='title'
              onChange={handleform}
              value={form.title} />
            Description<input className='desc' type='text'
              placeholder='Description'
              name='description'
              onChange={handleform}
              value={form.description} />
            <br></br>
            <button className='submit' type='submit'>Add task</button>
          </form>
          <div className='taskthree'>
            <h2>Tasks</h2>
            <p className='tasks'>tasks</p>
            <div className='icon'> <p className='icons'><AiOutlineCheck />Completed</p>
              <p className='icons'>Share</p></div>
          </div>
        </div>
      <div className='tasktwo'>
        <HotsBlogs />
      </div>
      </div>
    </>
  )
}
export default Task