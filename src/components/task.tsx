'use client'
import React, { useEffect, useState } from 'react'

function Task({ id }) {

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tasks = localStorage.getItem('tasks');
    setTask(JSON.parse(tasks).filter((task) => task.id == id)[0])
    setLoading(false);

  }, [])


  return <div className="container px-5 py-24 mx-auto">

    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-full">
        {!loading &&
          <div className="h-full bg-gray-100 bg-opacity-75 px-8 p-8 rounded-lg overflow-hidden relative">
            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{task.todo}</h1>
            {task.completed && <><h2 className=" font-bold text-green-700 mb-1">Completed</h2>
              <p className="text-gray-900 text-sm mb-3">Done By user id {task.userId}</p>
            </>
            }

            {!task.completed && <><h2 className=" font-bold text-red-500 mb-1">Pending</h2>
              <p className="text-gray-900 text-sm mb-3">Assign to user id {task.userId}</p>
            </>
            }
          </div>
        }
      </div>

    </div>
  </div>
}

export default Task