import React from 'react'
import s from '../style.module.css'
import { setIsMonthly } from '@slices/userPageSlice'
import { useAppDispatch } from 'hooks'

type SwitchType =  {
    isMonthly: boolean
}

function Switch({isMonthly}: SwitchType): JSX.Element {

    const dispatch = useAppDispatch()
    return (
        <div className={s.switchCont}>
            <div className='text-lg font-bold'>Monthly</div>
            <div
                onClick={() => dispatch(setIsMonthly())} 
                className={s.switchBlock}>
                <div className={`${s.switchCircle} ${isMonthly ? 'left-0.5' : 'left-switch'}`}></div>
            </div>
            <div className='text-lg font-bold'>Weekly</div>
        </div>
    )
}

const MemoSwitch = React.memo(Switch, (prevProps, nextProps) => {
    return prevProps.isMonthly === nextProps.isMonthly;
});

export default MemoSwitch;


