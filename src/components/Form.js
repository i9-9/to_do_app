import React, { useState } from 'react';


const Form = ({ onSubmit, addTask }) => {

    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(name);
        setName("");
    }

  return (
    <form onSubmit={handleSubmit} className='flex items-center'>
        <input
        type="text"
        id="new-todo-input"
        className="mr-2 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        name="text"
        autoComplete="off" 
        value={name}
        onChange={handleChange}
        />
        <button type="submit" className='px-6 py-2.5 bg-yellow-100 text-gray-700 text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-200 hover:shadow-lg focus:bg-yellow-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-300 active:shadow-lg transition duration-150 ease-in-out font-bold'>
        Add
        </button>
    </form>
  )
}

export default Form