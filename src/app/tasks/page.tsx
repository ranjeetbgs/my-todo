'use client'
import Filter from "@/components/filter";
import Tasks from "@/components/tasks";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);

    function updateStatus(id: Number, isCompleted: boolean) {
        

        const lsTasks = tasks.map(task =>
            task.id == id
              ? { ...task, completed: isCompleted }
              : task
          );
        
        localStorage.setItem('tasks', JSON.stringify(lsTasks));
       
        setIsUpdate(!isUpdate);

    }

    function filterTasks(status: string) {

        if (status) {
            const isCompleted = status == "Completed";
            setFilteredTasks(tasks.filter(task => task.completed == isCompleted));
        }
        else setFilteredTasks(tasks)

    }

    useEffect(() => {

        const lsTasks = localStorage.getItem('tasks');
        
        if (!lsTasks) {
            fetch('https://dummyjson.com/todos')
                        .then(res => res.json())
                        .then((res) => {
                            setTasks(res.todos.reverse());
                            localStorage.setItem('tasks', JSON.stringify(res.todos.reverse()));
                            setFilteredTasks(res.todos.reverse());
                            setLoading(false);
                        }
                        );

                    }
                    else{
                        
                        setTasks(JSON.parse(lsTasks).reverse());
                        setFilteredTasks(JSON.parse(lsTasks).reverse());
                        setLoading(false);
                    }

    }, [isUpdate]);


    return <div className="container px-5 py-8 mx-auto text-gray-200 body-font">
        <div className="flex flex-wrap">
            <div className="flex flex-col w-3/4 mb-10">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-100">Tasks</h1>

            </div>
            <div className="flex flex-col w-1/8 mb-10">
                <Filter onFilter={(value: string) => filterTasks(value)} />
            </div>
            <div className="flex flex-col w-1/8 mb-10">
                <Link href="tasks/create">Create New</Link>
            </div>
        </div>
        <div className=" w-full mx-auto overflow-auto">
            {loading && <p>Loading....</p>}
            {!loading && <Tasks taskList={filteredTasks} onDeleteTask={()=>setIsUpdate(!isUpdate)} onUpdateTask={(id,isCompleted) => updateStatus(id,isCompleted)} />}
        </div>

    </div>




}