import { createSlice } from '@reduxjs/toolkit'


let initialState = { BookReadCount: { BookID: "default", ReadCount: 0 } }


export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      let bookName = action.payload;      
      state.BookReadCount = { BookID: bookName, ReadCount: state.BookReadCount.ReadCount += 1 }
    },
    decrement: (state, action) => {
      let bookName = action.payload;
      state.BookReadCount = { BookID: bookName, ReadCount: state.BookReadCount.ReadCount -= 1 }
    },
    incrementByAmount: (state, action) => {

      state.BookReadCount += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer