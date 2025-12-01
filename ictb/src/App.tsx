import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import BoardList from './pages/board/BoardList';
import Header from './pages/Header'
import Login from './pages/login/Login';


function App() {
  return (
<Router>
 <Header/>
   <Routes>
    {/* 로그인 세션이 있으면 */}
    if(true) ( 
     <Route path='/' element={<BoardList/>} />
     )else{
      <Route path='/' element={<Login/>} />
     }
    
  </Routes>
</Router>
  );
}

export default App;
