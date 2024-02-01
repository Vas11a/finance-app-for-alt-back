import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HistoryElemType } from 'types'

export interface userHistoryType {
  history: HistoryElemType[]
}

const initialState: userHistoryType = {
    history: []
}

export const userHistorySlice = createSlice({
  name: 'userHistory',
  initialState,
  reducers: {
    setHistory(state, action: PayloadAction<HistoryElemType[]>) {
      state.history = action.payload
    },
    addHistory(state, action: PayloadAction<HistoryElemType>) {
      state.history.push(action.payload)
    },
    removeHistory(state, action: PayloadAction<number>) {
      state.history.splice(action.payload, 1)
    },
  },
})


export const { setHistory, addHistory, removeHistory } = userHistorySlice.actions

export default userHistorySlice.reducer