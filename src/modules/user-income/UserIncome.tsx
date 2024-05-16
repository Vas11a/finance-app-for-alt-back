import React from 'react'
import s from './style.module.css'
import MemoCalendar from './parts/Calendar'
import MemoChart from './parts/MyChart'
import Date from './parts/Date'
import Chart from "chart.js/auto";
import MemoSwitch from './parts/Switch'
import MemoSave from './parts/Save'
import { CategoryScale } from "chart.js";
import { useAppSelector, useAppDispatch } from 'hooks'
import { addHistory } from '@slices/userHistorySlice'
import { setCalendar } from '@slices/userPageSlice'
import MainService from '@service/MainService'
import { setHistoryObj } from './helpers'
Chart.register(CategoryScale);

type UserIncomeType = {
  setIsLoading: (value: boolean) => void
  setErrorText: (value: string) => void
  setIsError: (value: boolean) => void
}

export default function UserIncome({ setIsLoading, setErrorText, setIsError }: UserIncomeType): JSX.Element {

  const dispatch = useAppDispatch()
  const [activeDay, setActiveDay] = React.useState<number>(34)
  const { calendar, globalTotal, weekTotal, isMonthly, indicate } = useAppSelector(state => state.userPage)
  const { userId, email } = useAppSelector(state => state.profile)
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (mounted) {
      console.log(indicate);
      console.log(globalTotal);

      if (indicate) {        
        saveCurrentData();
      }
    } else {
      setMounted(true);
    }
  }, [globalTotal]);

  // React.useEffect(() => {
  //   console.log(indicate);

  //   if (indicate) {
  //     saveCurrentData()
  //   }
  // } , [globalTotal])

  const saveCurrentData = async () => {
    setIsLoading(true)
    setIsError(false)
    try {
      // console.log({ calendar: calendar, userId: userId });
      
      const res = await MainService.updateCalendar(calendar, userId)
      console.log(res.data)
      dispatch(setCalendar(res.data.calendar))
      setIsError(false)
    } catch (error) {
      setErrorText('Server error')
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  const addToHistory = async () => {
    const resFc = setHistoryObj(globalTotal, weekTotal, isMonthly, `${calendar[0].fullDate} - ${calendar[calendar.length - 1].fullDate}`, `${calendar[28].fullDate} - ${calendar[calendar.length - 1].fullDate}`)
    setIsLoading(true)
    setIsError(false)
    try {
      const res = await MainService.addElemToHistory(resFc, userId)
      dispatch(addHistory(resFc))
    } catch (error) {
      setErrorText('Server error')
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='h-full'>
      <Date
        activeDay={calendar[activeDay]}
        activeIdx={activeDay}
      />
      <div className={s.calendarBlock}>
        <MemoCalendar calendar={calendar} isMonthly={isMonthly} setActiveDay={setActiveDay} activeDay={activeDay} />
        <MemoChart calendar={calendar} globalTotal={globalTotal} weekTotal={weekTotal} isMonthly={isMonthly} />
      </div>
      <div className={s.totalBlock}>
        <MemoSwitch isMonthly={isMonthly} />
        <MemoSave isMonthly={isMonthly} addToHistory={addToHistory} />
        <div className='text-2xl font-bold'>
          Total:
          <span
            className={`${isMonthly ? globalTotal < 0 ? 'text-red-500' : 'text-green-500' : weekTotal < 0 ? 'text-red-500' : 'text-green-500'}`}>
            {isMonthly ? globalTotal : weekTotal}
          </span></div>
      </div>

    </div>
  )
}






// bizarreelectronics.com