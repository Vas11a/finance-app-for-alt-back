import React from 'react'
import { useNavigate } from 'react-router-dom';
import RegistrationModule from 'modules/registration/RegistrationModule';
import Confirm from 'modules/confirm-mail/Confirm';
import AuthService from '@service/AuthService';

function RegistrationPage(): JSX.Element {

  const [userCode, setUserCode] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [emailLocal, setEmailLocal] = React.useState<string>('');
  const [passwordLocal, setPasswordLocal] = React.useState<string>('');
  const [userName, setUserName] = React.useState<string>('');
  const navigate = useNavigate();

  const createUser = async () => {
    setIsLoading(true)
    try {
      const res = await AuthService.createUser(emailLocal, passwordLocal, userName);
      console.log(res.data);
      navigate('/login');
    } catch (error) {
      alert('Server error');
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='welcome-cont'>
      <div className='flex justify-center pt-4 sm:pt-16'>

        {
          userCode === '' ? (
            <RegistrationModule 
              setEmailLocal={setEmailLocal}
              setPasswordLocal={setPasswordLocal}
              setUserName={setUserName}
              emailLocal={emailLocal}
              passwordLocal={passwordLocal}
              userName={userName}

              setUserCode={setUserCode}
            />
          ) : (
            <Confirm confirm={createUser} isLoading={isLoading} code={userCode} setCode={setUserCode} />
          )
        }
      </div>
    </div>
  )
}

export default RegistrationPage;
