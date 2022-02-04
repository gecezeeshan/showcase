import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../Slice/counterSlice'
import userProfileReducer from '../Slice/UserProfileReducer'

const sliceStore = configureStore({  
  reducer: {
    counter: counterReducer,
    userReducer: userProfileReducer
  },
})

console.log(sliceStore);

export default sliceStore;
