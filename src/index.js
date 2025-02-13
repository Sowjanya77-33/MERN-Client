import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Navbar from './components/navbar';
import Register from './components/register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<h1>login</h1>}/>
        <Route path="/logout" element={<h1>logout</h1>}/>
          
      </Routes>
    </Router>

  </div>
  
);