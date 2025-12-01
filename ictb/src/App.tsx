import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Main from './components/Main';

function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Main/>}/>
  </Routes>
</Router>
  );
}

export default App;
