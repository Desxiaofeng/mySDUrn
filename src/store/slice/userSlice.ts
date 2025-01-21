import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// 使用该类型定义初始 state
const initialState:  {value: number} = {
  value: 0
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
    }
  }
})

export const { increment, decrement, incrementByAmount } = userSlice.actions
export default userSlice.reducer