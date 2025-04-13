'use client'
import React, { useState } from 'react'
import { redirect } from 'next/navigation'

function CreateTask() {
    const [taskName, setTaskName] = useState("");
    function createTask() {
        let tasks = JSON.parse(localStorage.getItem('tasks')!);
        const task = {
            "id": new Date().getTime(),
            "todo": taskName,
            "completed": false,
            "userId": 1
        }

        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        redirect("/tasks")



    }

    return (<section className="text-gray-600 body-font relative">

        <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Create a Task</h2>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">Task</label>
                    <input type="text" name="email" value={taskName} onChange={(e) => setTaskName(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>

                <button onClick={createTask} className="lg:w-1/4 md:w-1/2 mr-0 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Save</button>

            </div>
        </div>
    </section>
    )
}

export default CreateTask