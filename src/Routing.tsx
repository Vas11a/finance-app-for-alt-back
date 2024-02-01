import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from 'pages/WelcomePage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import ResetPass from 'pages/ResetPass';
import Error404 from 'pages/Error404';
import UserPage from 'pages/UserPage';

function Routing(): JSX.Element {

  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<WelcomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/registration' element={<RegistrationPage/>} />
        <Route path='/reset-password' element={<ResetPass/>} />
        <Route path='/user-pannel' element={<UserPage/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </div>
  )
}

export default Routing