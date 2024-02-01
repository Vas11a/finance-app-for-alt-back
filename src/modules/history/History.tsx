import React from 'react'
import HistoryElem from './parts/HistoryElem'
import s from './style.module.css'
import Button from 'components/Button'
import { useAppSelector, useAppDispatch } from 'hooks'
import { setHistory, removeHistory } from '@slices/userHistorySlice'
import { mainUrl } from 'urls'
import axios from 'axios'

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
      await axios.post(`${mainUrl}clearHistory`, { userId: userId })
      setIsLoading(false)
      dispatch(setHistory([]))
    } catch (error) {
      setIsLoading(false)
      setErrorText('Server error')
      setIsError(true)
    }
  }

  const removeOneHistoryElem = async (idx: number) => {
    setIsLoading(true)
    setIsError(false)
    try {
      let sendHistory = JSON.parse(JSON.stringify(history))
      sendHistory.splice(idx, 1)
      await axios.post(`${mainUrl}removeOneHistoryElem`, { userId: userId, data: sendHistory })
      setIsLoading(false)
      dispatch(removeHistory(idx))
    } catch (error) {
      setIsLoading(false)
      setErrorText('Server error')
      setIsError(true)
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
