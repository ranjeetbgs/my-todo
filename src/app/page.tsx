'use client'
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col row-start-2 items-center sm:items-start">



        <div className="text-gray-50 body-font">
          <div className="container mx-auto flex px-5 items-center justify-center flex-col">
            <h1 className="text-5xl text-gray-50  mb-8 font-extrabold">My To-Do</h1>
            <div className="text-center lg:w-2/3 w-full">
              <p className="mb-8 leading-relaxed">
                We allows users to create, manage, and organize lists of tasks they need to complete, often for personal or professional use. These apps help users track their progress, prioritize tasks, and stay organized by providing a digital space to list and manage tasks.
              </p>
              <div className="flex justify-center">
                <Link className="btn border-gray-100 border px-4 py-3 rounded-2xl" href="/tasks">Go to Task</Link>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
