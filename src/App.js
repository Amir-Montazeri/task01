import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import NavBar from './pages/NavBar';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <CssBaseline />
      <div className='app'>
        <Router >
          <NavBar />
          <Routes>
            <Route path='/about' element={<div>about</div>} />
            <Route path='/contact' element={<div>contact</div>} />
            <Route path='/cooperate' element={<div>cooperate</div>} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;