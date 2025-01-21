import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// 使用该类型定义初始 state
const initialState:  {value: number, themeMode: string,  favorKit: Array<any>} = {
  value: 0,
  themeMode: 'light',
  favorKit: [0, 1, 2],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    // 使用 PayloadAction 类型声明 `action.payload` 的内容
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    redux_setThemeMode: (state, action) => {
      state.themeMode = action.payload
    },
    redux_setFavorKit: (state, action) => {
      state.favorKit = action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount,  redux_setThemeMode, redux_setFavorKit} = userSlice.actions
export default userSlice.reducer