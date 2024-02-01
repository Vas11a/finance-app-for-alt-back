import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface profileState {
  username: string
  email: string
  password: string
  userId: string
}

const initialState: profileState = {
  username: '',
  email: '',
  password: '',
  userId: ''
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<profileState>) => {
      state.username = action.payload.username
      state.email = action.payload.email
      state.password = action.payload.password
      state.userId = action.payload.userId
    },
    setUserName(state, action:PayloadAction<string>) {
      state.username = action.payload
    },
  },
})


export const { setUserData, setUserName } = profileSlice.actions

export default profileSlice.reducer