import React from "react";

const TodoItem = ({ task, toggleTaskCompletion }) => {
  const handleCheckboxChange = () => {
    toggleTaskCompletion(task.id);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleCheckboxChange}
        />
        {task.text}
      </label>
    </li>
  );
};

export default TodoItem;
