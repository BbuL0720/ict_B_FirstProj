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
import LostList from "./pages/lost/LostList";
import Undo from "./pages/undo/Undo";
import Signup from "./pages/login/Signup";
import BoardDetail from "./pages/board/BoardDetail";
import BoardForm from "./pages/board/BoardForm";

function App() {
	let isLogin = true; //axios로 로그인 정보 받고 데이터가 있으면? 으로 처리해야할듯

	return (
		<Router>
			{/* {isLogin && <Header />} */}
			{isLogin ? (
				<SlackPage>
					<Routes>
						<Route path="/" element={<Todo />} />
						<Route path="/todo" element={<Todo />} />
						<Route path="/board" element={<BoardList />} />
						<Route path="/board/:num" element={<BoardDetail />} />
						<Route path="/board/form" element={<BoardForm />} />
						<Route path="/lost" element={<LostList />} />
					</Routes>
				</SlackPage>
			) : (
				<Routes>
					<Route path="/" element={<Signup />} />
					<Route path="*" element={<Undo />} />
				</Routes>
			)}
		</Router>
	);

}

export default App;
