function Progress({ completed, total }) {

  const percentage = total === 0
    ? 0
    : Math.round((completed / total) * 100);

  return (
    <div className="progress-card">

      <h2>Today's Progress 📊</h2>

      <h1>{percentage}%</h1>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p>
        {completed} of {total} tasks completed
      </p>

    </div>
  );
}

export default Progress;