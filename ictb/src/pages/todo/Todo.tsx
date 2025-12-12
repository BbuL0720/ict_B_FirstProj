import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./todo.css";

const Todo: React.FC = () => {
  const todosubmit = () => {
    console.log("TODO입력");
  };
  const [date, setDate] = React.useState<any>(new Date());
  return (
    <div>
      <h1 className="text-center">React Calendar</h1>
      <div
        className="app"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />

          <div className="todo-input">
            <div className="todo-container">
              <div className="todo-box">
                <div className="todo-header">
                  <div className="todo-title">Todo List</div>
                </div>

                <div className="todo-input-area">
                  <input
                    type="text"
                    className="todo-input-box"
                    placeholder="Write a new task..."
                  />
                  <button className="todo-add-btn">＋</button>
                </div>

                <ul className="todo-list">
                  <li className="todo-item">
                    <input type="checkbox" defaultChecked />
                    <span className="checked">Lunch</span>
                    <div className="actions">
                      <i className="edit">✎</i>
                      <i className="delete">🗑</i>
                    </div>
                  </li>

                  <li className="todo-item">
                    <input type="checkbox" />
                    <span>Dinner</span>
                    <div className="actions">
                      <i className="edit">✎</i>
                      <i className="delete">🗑</i>
                    </div>
                  </li>

                  <li className="todo-item">
                    <input type="checkbox" />
                    <span>Snacks</span>
                    <div className="actions">
                      <i className="edit">✎</i>
                      <i className="delete">🗑</i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
};

export default Todo;
