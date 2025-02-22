import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete  }) {
  const taskList = tasks.map(task => (
    <Task
     text={task.text} 
     category={task.category}
     key={task.text}
     handleDelete={handleDelete}
    />
  ))
  return (
    <div className="tasks">
     {taskList}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
