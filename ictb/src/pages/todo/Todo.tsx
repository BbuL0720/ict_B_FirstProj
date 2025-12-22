import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./todo.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const dummyData = [
  {
    date: '2025-12-19',
    description: '프로젝트 기획 회의'
  },
  {
    date: '2025-12-20',
    description: '헬스장 PT'
  },
  {
    date: '2025-12-20',
    description: '친구와 저녁'
  }
];

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Todo {
  date: string;
  description: string;
};


const Todo: React.FC = () => {
  const [date, setDate] = useState(new Date()); // 초기값으로 현재 날짜 설정
  const [inputValue, setInputValue] = useState(''); // 현재 인풋 값
  const [data, setData] = useState(dummyData); // 더미데이터 추가
  const formatDate = (date: Date): string => { // 데이터가 이전날짜로 나오기 때문에 시간차 해결코드 (인터넷에 가져옴)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const selectedDateString = formatDate(date);

  const findData = data.filter(
    (item) => item.date === selectedDateString
  );

  const inputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    console.log(inputValue)
  }

  const handleDateChange = (value: Value) => {
    console.log("바뀜", value);
    if (value instanceof Date) {
      setDate(value);
    } else if (Array.isArray(value) && value[0]) {
      setDate(value[0]);
    }
  };

  const addTodo = () => {
    if (inputValue.trim() !== '') { // 공백이 아니면 추가
      console.log("TODO입력");
      setData([...data, { date: formatDate(date), description: inputValue }]); // 기존 items 배열에 새 값 추가
      setInputValue("");
    }

  };
  console.log("todo_data =" + JSON.stringify(data));

  return (
    <div>
      <div className="app" style={{ display: "flex", justifyContent: "center" }} >
        <div className="calendar-container">
          <Calendar
            value={date}
            onChange={handleDateChange}
            calendarType="hebrew"
            tileClassName={({ date, view }) => {
              if (view !== 'month') return null;

              const day = date.getDay();
              if (day === 0) return 'sunday';
              if (day === 5) return 'friday';
              if (day === 6) return 'saturday';
            }}
          />

          <div className="todo-input">
            <div className="todo-container">
              <div className="todo-box">
                <div className="todo-header">
                  <div className="todo-title">Todo List</div>
                </div>

                <div className="todo-input-area">
                  <input
                    onChange={inputTodo}
                    value={inputValue}
                    type="text"
                    className="todo-input-box"
                    placeholder="Write a new task..."
                  />
                  <button onClick={addTodo} className="todo-add-btn">＋</button>
                </div>

                {findData.length > 0 ? (
                  <ul>
                    {findData.map((item, index) => (
                      <li key={index} className="todo-item">
                        <span>{item.description}</span>
                        <div className="actions">
                          <i className="edit"><EditIcon /></i>
                          <i className="delete"><DeleteIcon /></i>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="todo-input-area">데이터가 없습니다</div>
                )}
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
