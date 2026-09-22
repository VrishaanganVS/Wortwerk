"use client"

import { useState } from "react"

const tasks = [
  "Attend your Goethe class",
  "Add new vocabulary",
  "Revise for 10 minutes", // this is a array that works dynamically as well but for that we have used .map() react function, it creates one UI element for every function in that array. so if we add more tasks in the array, it will automatically create a new UI element for that task.

]

export default function FocusList() {
  const [completed, setCompleted] = useState<string[]>([])

  function toggleTask(task: string) {
    if (completed.includes(task)) {
      setCompleted(completed.filter((item) => item !== task))
    } else {
      setCompleted([...completed, task])
    }
  }

  return (
    <div className="rounded-2xl border border-[#dedfd5] bg-white p-6">
      <h2 className="text-xl font-bold">
        Today's focus
      </h2>

      <p className="mt-2 text-sm text-[#68786f]">
        {completed.length} of {tasks.length} completed
      </p>

      <div className="mt-5 space-y-4">
        {tasks.map((task) => {
          const isCompleted = completed.includes(task)

          return (
            <button
              key={task}
              onClick={() => toggleTask(task)}
              className="flex w-full items-center gap-3 text-left"
            >
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                  isCompleted
                    ? "border-[#244c3e] bg-[#244c3e] text-white"
                    : "border-[#68786f]"
                }`}
              >
                {isCompleted && "✓"}
              </div>

              <span
                className={
                  isCompleted
                    ? "text-[#68786f] line-through"
                    : ""
                }
              >
                {task}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}