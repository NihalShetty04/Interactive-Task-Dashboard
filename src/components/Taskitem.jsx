function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <div className="task">
      <span className={task.completed ? "completed" : ""}>
        {task.text}
      </span>

      <div>
        <button onClick={() => toggleTask(task.id)}>
          {task.completed ? "Undo" : "Done"}
        </button>

        <button onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
