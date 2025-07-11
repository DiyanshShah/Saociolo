import React from 'react'

async function TaskPage() {

    const response = await fetch("http://localhost:3000/api/tasks", {
        method: "GET",
        cache: "no-store",
    })
    const tasks = await response.json();
    
    console.log("Tasks: ", tasks);
  return (
    <div>
      TaskPage
    </div>
  )
}

export default TaskPage
