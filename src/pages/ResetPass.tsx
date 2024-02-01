import React from 'react'
import { useNavigate } from 'react-router-dom';
import { mainUrl } from 'urls';
import axios from 'axios';
import Restore from 'modules/restore-pass/Restore';
import Confirm from 'modules/confirm-mail/Confirm';

function ResetPass(): JSX.Element {

  const [userCode, setUserCode] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const confirm = async () => {
    setIsLoading(true)
    try {
      await axios.post(`${mainUrl}savePassword`);
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
            <Restore setUserCode={setUserCode}/>
          ) : (
            <Confirm confirm={confirm} isLoading={isLoading} code={userCode} setCode={setUserCode} />
          )
        }
      </div>
    </div>
  )
}

export default ResetPass;
