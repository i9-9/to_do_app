import React from 'react'

const Todo = ({ name, completed, id }) => {
  return (
    <li className='flex-row flex items-center mb-2 justify-between'>
        <div className='flex-row flex rounded leading-tight text-xs bg-yellow-100 font-medium shadow-md px-6 py-2.5 transition duration-150 ease-in-out mr-2'>
            <input id={id} type="checkbox" defaultChecked={completed} className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
            <label className="mx-2" htmlFor={id}>
                {name}
            </label>
        </div>
        <div>
            <button type="button" className="px-6 py-2.5 bg-yellow-100 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-200 hover:shadow-lg focus:bg-yellow-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-300 active:shadow-lg transition duration-150 ease-in-out">
                Edit <span className="hidden">{name}</span>
            </button>
            <button type="button" className="px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out ml-2">
                Delete <span className="hidden">{name}</span>
            </button>
        </div>
  </li>
  )
}

export default Todo