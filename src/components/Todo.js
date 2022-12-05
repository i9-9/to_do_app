import React, { useState, useRef, useEffect } from 'react'

const Todo = ({ name, completed, id, toggleTaskCompleted, deleteTask, editTask }) => {

    
    const [isEditing, setEditing] = useState(false)
    const [newName, setNewName] = useState('')
    
    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);

    const wasEditing = usePrevious(isEditing);
    
    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
      }
      

    function handleChange(e) {
        setNewName(e.target.value)
    }

    function handleSubmit(e) { 
        e.preventDefault();
        editTask(id, newName);
        setNewName("");
        setEditing(false);
    }

    useEffect(() => {
        if (!wasEditing && isEditing) {
        editFieldRef.current.focus();
    }
        if (wasEditing && !isEditing) {
        editButtonRef.current.focus();
    }
    }, [wasEditing, isEditing]);

    

    const editingTemplate = (
        <form className='flex justify-between flex-row' onSubmit={handleSubmit}>
            <div className='flex-row flex rounded leading-tight text-xs bg-yellow-100 font-medium shadow-md px-6 py-2.5 transition duration-150 ease-in-out mr-1 my-1'>
                <label htmlFor={id} className='text-xs my-2 mr-2'>
                    New name for {name}
                </label>
                <input 
                id={id} 
                type='text' 
                className='bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2' 
                value={newName}
                onChange={handleChange}
                ref={editFieldRef}
                />
            </div>
            <div className='flex my-2 justify-evenly'>
                <button type="button" className='px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out ml-2 mr-2' onClick={() => setEditing(false)}>
                    Cancel
                    <span className='hidden'>renaming {name}</span>
                </button>
                <button type='submit' className='px-6 py-2.5 bg-yellow-100 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-200 hover:shadow-lg focus:bg-yellow-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-300 active:shadow-lg transition duration-150 ease-in-out'>
                    Save
                    <span className='hidden'>new name for {name}</span>
                </button>
            </div>
        </form>
    );
    const viewTemplate = (
        <div className='flex justify-between mb-2 items-center'>
            <div className='flex-row flex rounded leading-tight text-xs bg-yellow-100 font-medium shadow-md px-6 py-2.5 transition duration-150 ease-in-out mr-2'>
                <input
                    id={id}
                    type='checkbox'
                    defaultChecked={completed}
                    onChange={() => toggleTaskCompleted(id)}
                    className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label htmlFor={id} className='mx-2'>
                    {name}
                </label>
            </div>
            <div>
                <button 
                type='button' 
                className='px-6 py-2.5 bg-yellow-100 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-200 hover:shadow-lg focus:bg-yellow-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-300 active:shadow-lg transition duration-150 ease-in-out'
                onClick={() => setEditing(true)}
                ref={editButtonRef}
                >
                    Edit <span className='hidden'>{name}</span>
                </button>
                <button
                type='button'
                onClick={() => deleteTask(id)}
                className='px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out ml-2'
                >
                    Delete <span className='hidden'>{name}</span>
                </button>
            </div>
        </div>
    );

    return ( <li> {isEditing ? editingTemplate : viewTemplate}</li> ) 
}

export default Todo
