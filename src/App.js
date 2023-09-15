import React from 'react';
import './App.css';
import Home from './components/Home';
import Store from './components/Store';
import Services from './components/Services';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';

import ProtectedRoute from './components/ProtectedRoute';
import Logout from './components/Logout';

function App() {

  return (
    <Router>
      <div className='grid-container'>
        <Routes>
        
        <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<ProtectedRoute Component={Home} />} />
          <Route path='/store' element={<ProtectedRoute Component={Store} />} />
          <Route path='/services' element={<ProtectedRoute Component={Services} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
        
      </div>
    </Router>
  )
}

export default App;
