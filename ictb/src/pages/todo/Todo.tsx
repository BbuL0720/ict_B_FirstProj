import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./todo.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo: React.FC = () => {
  const todosubmit = () => {
    console.log("TODO입력");
  };
  const [date, setDate] = React.useState<any>(new Date());
  return (
    <div>
      <div className="app" style={{ display: "flex", justifyContent: "center" }} >
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
                    <span className="checked">Lunch</span>
                    <div className="actions">
                      <i className="edit"><EditIcon /></i>
                      <i className="delete"><DeleteIcon /></i>
                    </div>
                  </li>

                  <li className="todo-item">
                    <span>Dinner</span>
                    <div className="actions">
                      <i className="edit"><EditIcon /></i>
                      <i className="delete"><DeleteIcon /></i>
                    </div>
                  </li>

                  <li className="todo-item">
                    <span>Snacks</span>
                    <div className="actions">
                      <i className="edit"><EditIcon /></i>
                      <i className="delete"><DeleteIcon /></i>
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
