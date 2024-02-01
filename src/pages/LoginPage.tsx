import React from 'react'
import LoginModule from 'modules/login-form/LoginModule';

function LoginPage(): JSX.Element {
    return (
        <div className='welcome-cont'>
            <div className='flex justify-center pt-4 sm:pt-16'>
                <LoginModule isLoginPage={true} />
            </div>
        </div>
    )
}

export default LoginPage;
