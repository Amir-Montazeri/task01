import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar';

const App = () => {
  return (
    <div className='app'>
      <Router >
        <NavBar />
        <Routes>
          <Route path='/about' element={<div>about</div>} />
          <Route path='/contact' element={<div>contact</div>} />
          <Route path='/cooperate' element={<div>cooperate</div>} />
          <Route path='/' element={<div>Home</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;