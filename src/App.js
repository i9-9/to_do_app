import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';


function App(props) {

  const [tasks, setTasks] = useState(props.tasks)

  function addTask(name) {
    alert(name)
  }

  const taskList = tasks.map((task) => 
    <Todo 
    id={task.id} 
    name={task.name} 
    completed={task.completed}
    key={task.id}
    />
  )

  return (
    <>
      <main>
        <div className='bg-[#FBE08C] h-screen w-screen flex flex-col justify-center items-center'>
          <h1 className='text-2xl mb-2 font-bold'>To Do App</h1>
          <h2 className='text-1xl mb-2 font-light'>What do you have to do?</h2>
          <Form onSubmit={addTask} />
          <div className="mt-2">
            <FilterButton />
            <FilterButton />
            <FilterButton />
          </div>
          <h2 id="list-heading" className='bg-yellow-100 text-sm mt-5 font-light shadow-lg rounded p-2 mb-6'>
          3 tasks remaining
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
