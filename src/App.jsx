import { useState, useEffect } from "react";

import Header from "./components/Header";
import Progress from "./components/Progress";
import TaskList from "./components/TaskList";
import PendingTasks from "./components/PendingTasks";

import { schedule } from "./data/schedule";

import "./App.css";

function App() {

  // 1. Select today's date
  const getInitialDate = () => {
    const today = new Date();

    const localDate =
      `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    return localDate >= "2026-11-10" &&
      localDate <= "2026-11-21"
      ? localDate
      : "2026-11-10";
  };

  // 2. Store selected date
  const [selectedDate, setSelectedDate] =
  useState(getInitialDate);

  // 3. Store completed tasks
  const [completedTasks, setCompletedTasks] =
    useState(() => {
      const saved = localStorage.getItem("koorishTasks");
      return saved ? JSON.parse(saved) : {};
    });

  // 4. Save progress in browser
  useEffect(() => {
    localStorage.setItem(
      "koorishTasks",
      JSON.stringify(completedTasks)
    );
  }, [completedTasks]);

  // 5. Find selected day's tasks
  const selectedDay = schedule.find(
    (day) => day.date === selectedDate
  );

  const todaysTasks = selectedDay?.tasks || [];

  // 6. Calculate completed tasks
  const completedToday = todaysTasks.filter(
    (task) => completedTasks[task.id]
  ).length;

  // 7. Find all previous pending tasks
  const pendingTasks = schedule
    .filter((day) => day.date < selectedDate)
    .flatMap((day) =>
      day.tasks
        .filter((task) => !completedTasks[task.id])
        .map((task) => ({
          ...task,
          date: day.date
        }))
    );

  // 8. Toggle task completion
  const toggleTask = (taskId) => {
    setCompletedTasks((previous) => ({
      ...previous,
      [taskId]: !previous[taskId]
    }));
  };

  // 9. Calculate overall progress
  const allTasks = schedule.flatMap(
    (day) => day.tasks
  );

  const totalCompleted = allTasks.filter(
    (task) => completedTasks[task.id]
  ).length;

  const overallProgress = Math.round(
    (totalCompleted / allTasks.length) * 100
  );

  return (
    <div className="app">

      <Header
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />

      <div className="dashboard">

        <div className="welcome">
          <h2>Welcome, Koorish! ❤️</h2>
          <p>Small steps every day create big results.</p>
        </div>

        <Progress
          completed={completedToday}
          total={todaysTasks.length}
        />

        <div className="overall-card">
          <h2>Overall Progress</h2>
          <h1>{overallProgress}%</h1>
          <p>
            {totalCompleted} / {allTasks.length} tasks completed
          </p>
        </div>

       <TaskList
  tasks={todaysTasks}
  completedTasks={completedTasks}
  onToggle={toggleTask}
  selectedDate={selectedDate}
/>

        <PendingTasks
          tasks={pendingTasks}
          completedTasks={completedTasks}
          onToggle={toggleTask}
        />

      </div>
    </div>
  );
}

export default App;
