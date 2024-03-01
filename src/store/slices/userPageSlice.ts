import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CalendarItem } from "types";



const initialState: { calendar: CalendarItem[], globalTotal: number, weekTotal: number,isMonthly:boolean, indicate:boolean } = {
  globalTotal: 0,
  weekTotal: 0,
  isMonthly: true,
  indicate: false,
  calendar: [
    { date: 22, fullDate: '22.12.2023', total: 0, messages: [] },
    { date: 23, fullDate: '23.12.2023', total: 0, messages: [] },
    { date: 24, fullDate: '24.12.2023', total: 0, messages: [] },
    { date: 25, fullDate: '25.12.2023', total: 0, messages: [] },
    { date: 26, fullDate: '26.12.2023', total: 0, messages: [] },
    { date: 27, fullDate: '27.12.2023', total: 0, messages: [] },
    { date: 28, fullDate: '28.12.2023', total: 0, messages: [] },
    { date: 29, fullDate: '29.12.2023', total: 0, messages: [] },
    { date: 30, fullDate: '30.12.2023', total: 0, messages: [] },
    { date: 31, fullDate: '31.12.2023', total: 0, messages: [] },
    { date: 1, fullDate: '1.01.2024', total: 0, messages: [] },
    { date: 2, fullDate: '2.01.2024', total: 0, messages: [] },
    { date: 3, fullDate: '3.01.2024', total: 0, messages: [] },
    { date: 4, fullDate: '4.01.2024', total: 0, messages: [] },
    { date: 5, fullDate: '5.01.2024', total: 0, messages: [] },
    { date: 6, fullDate: '6.01.2024', total: 0, messages: [] },
    { date: 7, fullDate: '7.01.2024', total: 0, messages: [] },
    { date: 8, fullDate: '8.01.2024', total: 0, messages: [] },
    { date: 9, fullDate: '9.01.2024', total: 0, messages: [] },
    { date: 10, fullDate: '10.01.2024', total: 0, messages: [] },
    { date: 11, fullDate: '11.01.2024', total: 0, messages: [] },
    { date: 12, fullDate: '12.01.2024', total: 0, messages: [] },
    { date: 13, fullDate: '13.01.2024', total: 0, messages: [] },
    { date: 14, fullDate: '14.01.2024', total: 0, messages: [] },
    { date: 15, fullDate: '15.01.2024', total: 0, messages: [] },
    { date: 16, fullDate: '16.01.2024', total: 0, messages: [] },
    { date: 17, fullDate: '17.01.2024', total: 0, messages: [] },
    { date: 18, fullDate: '18.01.2024', total: 0, messages: [] },
    { date: 19, fullDate: '19.01.2024', total: 0, messages: [] },
    { date: 20, fullDate: '20.01.2024', total: 0, messages: [] },
    { date: 21, fullDate: '21.01.2024', total: 0, messages: [] },
    { date: 22, fullDate: '22.01.2024', total: 0, messages: [] },
    { date: 23, fullDate: '23.01.2024', total: 0, messages: [] },
    { date: 24, fullDate: '24.01.2024', total: 0, messages: [] },
    { date: 25, fullDate: '25.01.2024', total: 0, messages: [] },
  ]
}

export const userPageSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setCalendar(state, actions: PayloadAction<CalendarItem[]>) {
      state.calendar = actions.payload
    },
    setOtherState(state, actions: PayloadAction<[globalTotal: number, weekTotal: number, isMonthly: boolean]>) {
      state.globalTotal = actions.payload[0]
      state.weekTotal = actions.payload[1]
      state.isMonthly = actions.payload[2]
    },
    changeIsIncomeR(state, action: PayloadAction<[act: number, i: number]>) {
      const [activeIdx, idx] = action.payload;
      state.calendar[activeIdx].messages[idx].isIncome = !state.calendar[activeIdx].messages[idx].isIncome;
    },
    changeDescriptionR(state, action: PayloadAction<[activeIdx: number, idx: number, e: string]>){
      const [activeIdx, idx, e] = action.payload;
      state.calendar[activeIdx].messages[idx].description = e
    },
    changePriceR(state, action: PayloadAction<[activeIdx: number, idx: number, e: number]>) {
      const [activeIdx, idx, e] = action.payload;
      state.calendar[activeIdx].messages[idx].price = e
    },
    addOneMessageR(state , action: PayloadAction<number>) {
      state.calendar[action.payload].messages.push({isIncome: true, description: '', price: 0})
    },
    removeMessageR(state, action:PayloadAction<[activeIdx: number, idx: number]>) {
      const [activeIdx, idx] = action.payload
      state.calendar[activeIdx].messages.splice(idx, 1)

    },
    saveR(state, action:PayloadAction<number>) {
      state.indicate = true
      state.globalTotal = 0
      state.weekTotal = 0
      const activeIdx = action.payload
      state.calendar[activeIdx].total = 0
      state.calendar[activeIdx].messages.forEach((elem) => {
        if (elem.isIncome) {
          state.calendar[activeIdx].total += elem.price
        } else {
          state.calendar[activeIdx].total -= elem.price
        }
      })
      state.calendar.forEach((elem, idx) => {
        if (idx > 27) {
          state.weekTotal += elem.total
        }
        state.globalTotal += elem.total
      })
    },
    setIsMonthly(state) {
      state.isMonthly = !state.isMonthly
    },
    setIndicator(state) {
      state.indicate = false
    }

  },
})


export const { 
  setCalendar,
  changeIsIncomeR, 
  changeDescriptionR, 
  changePriceR ,
  addOneMessageR,
  removeMessageR,
  saveR,
  setIsMonthly,
  setOtherState,
  setIndicator} = userPageSlice.actions

export default userPageSlice.reducer