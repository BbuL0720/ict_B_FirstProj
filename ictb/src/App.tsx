import React, { useState } from "react";
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
import MyPage from "./pages/mypage/MyPage";
import Home from "./MainPage/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ForgotPwd from "./pages/login/ForgotPwd";
import Diary from "./pages/diary/Diary";
import Friend from "./pages/friend/Friend";
import UpdatePwd from "./pages/login/UpdatePwd";
import { AuthProvider, useAuth } from "./pages/AuthProvider";
import RequireAuth from "./pages/RequireAuth";
import RequireGuest from "./pages/RequireGuest";

function App() {
  // const [isLogin, setIsLogin] = useState<boolean>(false); //axios로 로그인 정보 받고 데이터가 있으면? 으로 처리해야할듯(세션) 아마 안될듯

  // const handleLogout = () => {
  // 	setIsLogin(false);
  // };

  return (
    // <AuthProvider>
    // 	<Router>
    // 		{/* {isLogin && <Header />} */}
    // 		<RequireAuth>
    // 			<SlackPage>
    // 				<Routes>
    // 					<Route path='/mypage' element={<MyPage />} />
    // 					<Route path='/home' element={<Home />} />
    // 					{/* <Route path="/" element={<Navigate to="/board/free/list" replace />} /> */}

    // 					<Route path="/board/:kind/list" element={<BoardList />} />
    // 					<Route path="/board/:kind/detail/:id" element={<BoardDetail />} />
    // 					<Route path="/board/write" element={<BoardForm />} />
    // 					{/* <Route path="/board/:kind/form" element={<BoardForm />} /> */}

    // 					<Route path="/todo/todo" element={<Todo />} />
    // 					<Route path="/todo/diary" element={<Diary />} />
    // 					<Route path="/friend" element={<Friend />} />

    // 					<Route path="/lost/:kind/list" element={<LostList />} />
    // 					<Route path="/lost/:kind/detail/:id" element={<LostDetail />} />
    // 					<Route path="/lost/:kind/form" element={<LostForm />} />
    // 				</Routes>
    // 			</SlackPage>
    // 		</RequireAuth>
    // 		<Routes>
    // 			<Route path="/" element={<RequireAuth><Navigate to="/home" replace /></RequireAuth>} />
    // 			<Route path="/login" element={<Login />} />
    // 			<Route path="/signup" element={<Signup />} />
    // 			<Route path="/forgot" element={<ForgotPwd />} />
    // 			<Route path="/updatepwd" element={<UpdatePwd />} />
    // 		</Routes>
    // 	</Router>
    // </AuthProvider>
    <AuthProvider>
      <Router>
        <RequireAuth>
          <SlackPage>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/mypage" element={<MyPage />} />

              <Route path="/board/:kind/list" element={<BoardList />} />
              <Route path="/board/:kind/detail/:id" element={<BoardDetail />} />
              <Route path="/board/write" element={<BoardForm />} />

              <Route path="/todo/todo" element={<Todo />} />
              <Route path="/todo/diary" element={<Diary />} />
              <Route path="/friend" element={<Friend />} />

              <Route path="/lost/:kind/list" element={<LostList />} />
              <Route path="/lost/:kind/detail/:id" element={<LostDetail />} />
              <Route path="/lost/:kind/form" element={<LostForm />} />
            </Routes>
          </SlackPage>
        </RequireAuth>

        <Routes>
          <Route
            path="/login"
            element={
              <RequireGuest>
                <Login />
              </RequireGuest>
            }
          />
          <Route
            path="/signup"
            element={
              <RequireGuest>
                <Signup />
              </RequireGuest>
            }
          />
          <Route
            path="/forgot"
            element={
              <RequireGuest>
                <ForgotPwd />
              </RequireGuest>
            }
          />
        </Routes>

        {/* 기본 진입 */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
