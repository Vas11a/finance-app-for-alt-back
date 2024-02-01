import React from 'react'
import LoginModule from 'modules/login-form/LoginModule';

function WelcomePage(): JSX.Element {
  return (
    <div className='welcome-cont'>
        <div className='welcome-cont-white'>
            <div className='flex-1'>
                <div className='welcome-title'>Welcome to</div>
                <div className='welcome-title2'>Financiary</div>
                <div className='welcome-subtitle'>Best personal financial tracker for entire family</div>
            </div>
            <div className='form-container'>
                <LoginModule/>
            </div>
        </div>
    </div>
  )
}

export default WelcomePage;
