import React from 'react'
import { useNavigate } from 'react-router-dom';
import { mainUrl } from 'urls';
import axios from 'axios';
import Restore from 'modules/restore-pass/Restore';
import Confirm from 'modules/confirm-mail/Confirm';

function ResetPass(): JSX.Element {

  const [emailLocal, setEmailLocal] = React.useState<string>('');
  const [passwordLocal, setPasswordLocal] = React.useState<string>('');
  const [repeatPassword, setRepeatPassword] = React.useState<string>('');

  const [userCode, setUserCode] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const confirm = async () => {
    setIsLoading(true)
    try {
      await axios.post(`${mainUrl}savePassword`, {
        email: emailLocal,
        password: passwordLocal
      });
      setIsLoading(false)
      alert('Password changed');
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
            <Restore setUserCode={setUserCode}
              emailLocal={emailLocal}
              setEmailLocal={setEmailLocal}
              passwordLocal={passwordLocal}
              setPasswordLocal={setPasswordLocal}
              repeatPassword={repeatPassword}
              setRepeatPassword={setRepeatPassword}
            />
          ) : (
            <Confirm confirm={confirm} isLoading={isLoading} code={userCode} setCode={setUserCode} />
          )
        }
      </div>
    </div>
  )
}

export default ResetPass;
