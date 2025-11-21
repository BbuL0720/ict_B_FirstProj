import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SangMinTest from './SangMinTest';

function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<SangMinTest/>}/>
  </Routes>
</Router>
  );
}

export default App;
