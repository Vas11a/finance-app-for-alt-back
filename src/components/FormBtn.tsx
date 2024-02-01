import React from 'react'

type FormBtnType = {
    name: string;
    fc: () => void;
    isDisabled?: boolean;
}

function FormBtn({name, fc, isDisabled}: FormBtnType):JSX.Element {
  return (
    <div 
      onClick={isDisabled? () => {} : fc} 
      className={`flex justify-center rounded-xl text-white text-lg  mt-16 lg:mt-36 p-3  ${isDisabled ? 'cursor-not-allowed bg-oBg' : 'bg-oBut cursor-pointer'}`}>
        {name}
    </div>
  )
}

export default FormBtn
