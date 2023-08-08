import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import './App.css'

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AllPolitician from './pages/AllPoliticians';

function App() {
  /*const getToken = () => {
    return localStorage.getItem('authToken')
  }

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to='/login' />
  }

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to='/' />
  }*/

  return (
    <div className="App">
      <Navbar />
      <h1>Pagina principal</h1>
      
      <Routes>      
        
      <Route path="/" element={ <HomePage /> } />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/politicians/all-politicians" element={ <AllPolitician />} />
      


      </Routes>
      
    </div>
  );
}
export default App;