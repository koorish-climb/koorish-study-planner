function PendingTasks({ tasks, completedTasks, onToggle }) {

  return (
    <div className="pending-card">

      <h2>⏳ Pending Tasks</h2>

      {tasks.length === 0 ? (

        <p>Fantastic! No pending tasks. 🎉</p>

      ) : (

        tasks.map((task) => (

          <div className="pending-item" key={task.id}>

            <input
              type="checkbox"
              checked={!!completedTasks[task.id]}
              onChange={() => onToggle(task.id)}
            />

            <div>
              <h3>{task.title}</h3>

              <p>{task.description}</p>

              <small>
                Originally scheduled: {task.date}
              </small>
            </div>

          </div>

        ))

      )}

    </div>
  );
}

export default PendingTasks;