import React from 'react'
import { useNavigate } from 'react-router-dom';
import { mainUrl } from 'urls';
import axios from 'axios';
import RegistrationModule from 'modules/registration/RegistrationModule';
import Confirm from 'modules/confirm-mail/Confirm';

function RegistrationPage(): JSX.Element {

  const [userCode, setUserCode] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [emailLocal, setEmailLocal] = React.useState<string>('');
  const [passwordLocal, setPasswordLocal] = React.useState<string>('');
  const [userName, setUserName] = React.useState<string>('');
  const navigate = useNavigate();

  const confirm = async () => {
    setIsLoading(true)
    try {
      await axios.post(`${mainUrl}createUser`, { email: emailLocal, password: passwordLocal, username: userName });
      setIsLoading(false)
      navigate('/login');
    } catch (error) {
      alert('Server error');
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
            <Confirm confirm={confirm} isLoading={isLoading} code={userCode} setCode={setUserCode} />
          )
        }
      </div>
    </div>
  )
}

export default RegistrationPage;
