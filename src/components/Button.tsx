import React from 'react'

type ButtonType = {
    text: string
    extraClasses?: string
    fc?: () => void
}

export default function Button({text, extraClasses, fc}: ButtonType) {

  return (
    <div
        onClick={fc} 
        className={`text-lg cursor-pointer px-2 py-1 border-three duration-500 hover:bg-oBg rounded-lg w-fit border-oBut ${extraClasses}`}>
        {text}
    </div>
  )
}
