import React from 'react';
import FormBtn from 'components/FormBtn';
import error from '@imgs/error404.png';
import { useNavigate } from 'react-router-dom';

function Error404(): JSX.Element {

  const navigate = useNavigate();

  return (
    <div className='flex min-h-screen p-4 sm:px-8 pt-8 lg:px-36 justify-between lg:items-center bg-white'>
        <div className='relative' style={{zIndex: 2}}>
            <div className=' text-3xl sm:text-4xl font-thin'>Sorry you are here</div>
            <div className='pt-2 text-oBut text-4xl sm:text-7xl font-semibold tracking-wide'>Page not found</div>
            <div className=' list-item ml-6 pt-8 text-lg'>Check if the URL you wrote is correct</div>
            <div className=' list-item ml-6 pt-1 text-lg'>Check if the link is correct</div>
            <div className=' list-item ml-6 pt-1 text-lg'>Check the page you are looking for has been deleted</div>
            <div style={{width: '250px'}}>
                <FormBtn name='Back to homepage' fc={() => navigate('/')} />
            </div>
        </div>
        <div className='relative opacity-50 lg:opacity-100'>
          <img src={error} style={{zIndex: 1}} className=' absolute w-72 sm:w-96 h-auto lg:w-auto max-w-none right-0 lg:h-80 top-56 sm:top-72 lg:-top-40' alt="Error 404" />
        </div>
    
    </div>
  )
}

export default Error404;
