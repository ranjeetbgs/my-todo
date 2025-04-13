import Link from 'next/link'
import React from 'react'

function Tasks({ taskList , onUpdateTask,onDeleteTask}) {
  function updateTask(id,isCompleted)
  {
    onUpdateTask(id,isCompleted)
  }
  function deleteTask(id)
  {
   
    const tasks = localStorage.getItem('tasks');
    localStorage.setItem('tasks',JSON.stringify(JSON.parse(tasks).filter((task) => task.id != id)))
    onDeleteTask()
  }
  return (
    <table className="table-auto w-full text-left whitespace-no-wrap">
      <thead>
        <tr>
          <th className="px-4 py-3  border-b-1">Title</th>
          <th className="px-4 py-3 border-b-1">Status</th>
          <th className="px-4 py-3 border-b-1"> </th>
          <th className="px-4 py-3 border-b-1"> </th>


        </tr>
      </thead>
      <tbody>
        {
          taskList.map((task: any) => {

            return <tr key={task.id}>
              <td className=" border-b-1 border-gray-200 px-4 py-2">{task.todo}</td>
              <td className=" border-b-1 border-gray-200 px-4 py-2 cursor-pointer" 
               onClick={()=>updateTask(task.id, !task.completed)}
              
              >{
                task.completed && <div className="rounded-md text-center bg-green-800 py-0.5 px-1 border border-transparent text-sm text-white transition-all shadow-sm">
                  Completed
                </div>
              }
                {
                  !task.completed && <div className="rounded-md text-center bg-red-500 py-0.5 px-1 border border-transparent text-sm text-white transition-all shadow-sm">
                    Pending
                  </div>


                }</td>
              <td className=" border-b-1 border-gray-200  px-4 py-2 w-10 text-center">
                <Link href={`/tasks/${task.id}`} className="text-blue-400">View</Link>
              </td>
              <td className=" border-b-1 border-gray-200  px-4 py-2 w-10 text-center">
                <Link id={task.id} onClick={(e)=>deleteTask(e.target.id)} href={"#"} className="text-red-500">Delete</Link>
              </td>
            </tr>
          })
        }

      </tbody>
    </table>
  )
}

export default Tasks