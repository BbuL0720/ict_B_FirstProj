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

function App() {
  let isLogin = true;
  return (
    <Router>
      {isLogin && <Header />}
      <Routes>
        <Route
          path="/"
          element={isLogin ? <BoardList /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
