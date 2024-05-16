import React from 'react'
import HistoryElem from './parts/HistoryElem'
import s from './style.module.css'
import Button from 'components/Button'
import { useAppSelector, useAppDispatch } from 'hooks'
import { setHistory, removeHistory } from '@slices/userHistorySlice'
import MainService from '@service/MainService'

type HistoryType = {
  setIsLoading: (value: boolean) => void
  setErrorText: (value: string) => void
  setIsError: (value: boolean) => void
}

export default function History({ setIsLoading, setErrorText, setIsError }: HistoryType): JSX.Element {

  const {history} = useAppSelector(state => state.userHistory)
  const {userId} = useAppSelector(state => state.profile)
  const dispatch = useAppDispatch()

  const clearHistory = async () => {
    setIsLoading(true)
    setIsError(false)
    try {
      const res = await MainService.clearHistory(userId)
      console.log(res.data)
      dispatch(setHistory([]))
    } catch (error) {
      setErrorText('Server error')
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  const removeOneHistoryElem = async (idx: number) => {
    setIsLoading(true)
    setIsError(false)
    try {
      const res = await MainService.removeOneHistoryElem(userId, idx)
      console.log(res.data)
      dispatch(removeHistory(idx))
    } catch (error) {
      setErrorText('Server error')
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={s.main}>
      {
        history.length === 0 && (
          <div className='text-3xl font-bold text-gray-400'>No history</div>
        )
      }
      {
        history.map((elem, idx) => (
          <HistoryElem 
            key={idx} 
            elem={elem} 
            idx={idx}
            removeOneHistoryElem={removeOneHistoryElem}
          />
        ))
      }
      <Button fc={clearHistory} text='Clear all' extraClasses='mt-4'/>
    </div>
  )
}
