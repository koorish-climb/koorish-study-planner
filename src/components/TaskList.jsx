function TaskList({ tasks, completedTasks, onToggle, selectedDate }) {

  return (
    <div className="task-card">

     <h2>📚 Today's Tasks</h2>

<h3 className="today-date">
  {new Date(selectedDate + "T00:00:00").toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  )}
</h3>

      {tasks.map((task) => {

        const isCompleted = completedTasks[task.id] || false;

        return (
          <div
            className={`task-item ${isCompleted ? "completed" : ""}`}
            key={task.id}
          >

            <input
              type="checkbox"
              checked={isCompleted}
              onChange={() => onToggle(task.id)}
            />

            <div className="task-details">

              <h3>{task.title}</h3>

              <p>{task.time}</p>

              <small>{task.description}</small>

            </div>

            <span>
              {isCompleted ? "Completed" : "Pending"}
            </span>

          </div>
        );
      })}

    </div>
  );
}

export default TaskList;