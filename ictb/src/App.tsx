import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import BoardList from "./pages/board/BoardList";
import Header from "./pages/Header";
import Login from "./pages/login/Login";
import Todo from "./pages/todo/Todo";
import SlackPage from "./pages/SlackPage";

function App() {
  let isLogin = true;
  return (
    <Router>
      {/* {isLogin && <Header />} */}
      <SlackPage>
        <Routes>
          <Route
            path="/"
            element={isLogin ? <Todo /> : <Navigate to="/login" replace />}
          />
          {/* <Route path="/" element={<Todo />} /> */}
        </Routes>
      </SlackPage>
    </Router>
  );
}

export default App;
