import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import { nanoid } from 'nanoid';

const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP)

function App(props) {

  const [tasks, setTasks] = useState(props.tasks)
  const [filter, setFilter] = useState('All')

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id){
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks( remainingTasks )
  }

  function editTask(id, newName){
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList)
  }

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => 
    <Todo 
    id={task.id} 
    name={task.name} 
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    editTask={editTask}
    />
  )

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task'
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton 
    key={name} 
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
    />
  ))


  return (
    <>
      <main>
        <div className='bg-[#FBE08C] h-screen w-screen flex flex-col justify-center items-center'>
          <h1 className='text-2xl mb-2 font-bold'>To Do App</h1>
          <h2 className='text-1xl mb-2 font-light'>What do you have to do?</h2>
          <Form onSubmit={addTask} />
          <div className="mt-2">
            {filterList}
          </div>
          <h2 id="list-heading" className='bg-yellow-100 text-sm mt-5 font-light shadow-lg rounded p-2 mb-6'>
          {headingText}
          </h2>
          <ul
          className='flex flex-col'
          role="list"
          aria-labelledby="list-heading"
          >
            {taskList}
          </ul>
        </div>
      </main>
    </>
  )
  
}


export default App;
