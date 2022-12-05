import React from 'react'

const FilterButton = ({ name, isPressed, setFilter }) => {
  return (
    <button 
    type="button" 
    className="px-6 py-2.5 bg-yellow-100 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-200 hover:shadow-lg focus:bg-yellow-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-300 active:shadow-lg transition duration-150 ease-in-out mr-2 " aria-pressed={isPressed}
    onClick={() => setFilter(name)}
    >
        <span className="hidden">Show </span>
        <span>{name}</span>
        <span className="hidden"> tasks</span>
    </button>
  )
}

export default FilterButton