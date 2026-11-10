function Header({ selectedDate, onDateChange }) {
  return (
    <header className="header">
      <div>
        <h1>Koorish's Study Planner ❤️</h1>
        <p>Discipline today, success tomorrow.</p>
      </div>

      <div className="date-selector">
        <label>Select Date</label>

        <input
          type="date"
          min="2026-11-10"
          max="2026-11-21"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
        />
      </div>
    </header>
  );
}

export default Header;