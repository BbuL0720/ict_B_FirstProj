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
import LostList from "./pages/lost/LostList";
import Undo from "./pages/undo/Undo";
import Signup from "./pages/login/Signup";
import BoardDetail from "./pages/board/BoardDetail";
import BoardForm from "./pages/board/BoardForm";
import LostForm from "./pages/lost/LostForm";
import LostDetail from "./pages/lost/LostDetail";
import SlackPage from "./pages/SlackPage";

function App() {
  let isLogin = true; //axios로 로그인 정보 받고 데이터가 있으면? 으로 처리해야할듯(세션) 아마 안될듯

  return (
    <Router>
      {/* {isLogin && <Header />} */}
      {isLogin ? (
        <SlackPage>
          <Routes>
            <Route path="/" element={<Navigate to="/board/list/1" replace />} />

            <Route path="/board/:kind/list" element={<BoardList />} />
            <Route path="/board/:kind/detail/:id" element={<BoardDetail />} />
            <Route path="/board/:kind/form" element={<BoardForm />} />

            <Route path="/todo" element={<Todo />} />

            <Route path="/lost/:kind/list" element={<LostList />} />
            <Route path="/lost/:kind/detail/:id" element={<LostDetail />} />
            <Route path="/lost/:kind/form" element={<LostForm />} />

            <Route path="*" element={<Undo />} />
          </Routes>
        </SlackPage>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Undo />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
