import React, { useEffect, useState } from 'react'

function Filter({ onFilter }) {
    const [value, setValue] = useState("");

    function handleChange(event) {
        setValue(event.target.value);
        
      }

      useEffect(()=>onFilter(value),[value]);

    return (
        <div className="relative mb-4">
            <label className="w-1/2 text-gray-100 px-2">Filter</label>
            <select value={value}
                onChange={handleChange}
                className="w-1/2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                <option value="">All</option>
                <option value="Completed" >Completed</option>
                <option value="Pending" >Pending</option>
            </select>
        </div>
    )
}

export default Filter