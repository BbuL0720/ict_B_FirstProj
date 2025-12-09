import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../todo/todo.css";

const Todo: React.FC = () => {
  const [date, setDate] = React.useState<any>(new Date());
  return (
    <div className="app">
      <h1 className="text-center">React Calendar</h1>

      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>

      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
};

export default Todo;
