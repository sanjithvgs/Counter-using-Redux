import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state, action)=>{
        state.count+=1;
    },

    decrease: (state, action)=>{
        state.count-=1;
    },

    change: (state, action)=>{

    }
}});


export const { increase, decrease, change } = counterSlice.actions;

export default counterSlice.reducer;