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
import MyPolitician from './pages/MyPolitician';
import PoliticianDetails from './pages/PoliticianDetails';

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
  
      
      <Routes>      
        
      <Route path="/" element={ <HomePage /> } />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/politicians/all-politicians" element={ <AllPolitician />} />
      <Route path="/politicians/my-politicians" element={ <MyPolitician />} />
      <Route path="/politicians/details/:polId" element={ <PoliticianDetails />} />

      </Routes>
      
    </div>
  );
}
export default App;