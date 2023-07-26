import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleTaskCompletion }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
};

export default TodoList;
