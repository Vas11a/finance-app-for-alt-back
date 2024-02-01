import React from 'react'
import { HistoryElemType } from 'types'
import s from '../style.module.css'
import trashbox from '@imgs/trashbox.png'

type HistoryElementType = {
    elem: HistoryElemType
    idx: number
    removeOneHistoryElem: (idx: number) => void
}

export default function HistoryElem({elem , idx, removeOneHistoryElem}: HistoryElementType):JSX.Element {
    
    return (
        <div className={s.historyBlock}>
            <div className='text-2xl font-bold'>{elem.type}</div>
            <div className={s.date}>({elem.date})</div>
            <div
                className={`text-2xl font-bold ${elem.total < 0 ? 'text-red-500' : 'text-green-500'} `}>
                {elem.total < 0 ? elem.total : '+' + elem.total}
            </div>
            <img
                className='w-6 h-auto cursor-pointer'
                src={trashbox}
                onClick={() => removeOneHistoryElem(idx)}
                alt="Remove" />
        </div>
    )
}
