import React from 'react'

interface FormInputProps {
    name: string;
    placeholder: string;
    value: string;
    changeValue: (value: string) => void;
    eyeV? : string;
    eyeN? : string;
}

function FormInput({name, placeholder, value, changeValue, eyeN, eyeV}: FormInputProps):JSX.Element {

    const [eyeVisib, setEyeVisib] = React.useState<boolean>(true);

    return (
        <div className='pt-4 flex flex-col justify-between relative'>
            <label htmlFor="mail" className=' font-semibold'>{name}</label>
            <img src={eyeVisib ? eyeV : eyeN} alt="" className='absolute top-form right-3 cursor-pointer' onClick={() => setEyeVisib(!eyeVisib)} />
            <input 
                id='mail' 
                placeholder={placeholder} 
                value={value} 
                onChange={(e) => changeValue(e.target.value)} 
                className={`p-3 mt-1 border-black rounded-xl select-none ${eyeN ? 'pr-12' : ''}`} 
                type={eyeVisib ? 'text' : 'password'} 
            />
        </div>
    )
}

export default FormInput;
