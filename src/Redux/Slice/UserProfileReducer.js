import { createSlice } from '@reduxjs/toolkit'


let initialState = { MyUser: { UserName: "" } }

export const userSlice = createSlice({
  name: 'Profile',
  initialState: initialState,
  reducers: {
    userLogin: (state, action) => {          
      let user = action.payload;         
      state.MyUser = user;
    }
    , 
    logout : (state) => {           
        state.MyUser = {UserName : ""};
       
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { userLogin, logout } = userSlice.actions

export default userSlice.reducer