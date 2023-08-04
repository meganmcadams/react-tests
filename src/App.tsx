import React from 'react';
import './App.css';

import Navbar from './pages/navbar/Navbar';
import LoginForm from './pages/login/Login';
import CreateAccountForm from './pages/login/Create_Account';



function App() {
  return (
  <div className="Container">
    <Navbar />
    <h1>Hello</h1>
    <CreateAccountForm />
  </div>
  );
}

export default App;