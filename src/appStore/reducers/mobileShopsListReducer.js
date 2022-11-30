import { createSlice } from '@reduxjs/toolkit'
export const mobileShopsListReducer = createSlice({

  name: 'mobileShopsList',
  initialState: {
    list: null
  },
  reducers: {

    setList: (state, action) => {
      state.list = action.payload
    },

  }

})

export const { setList } = mobileShopsListReducer.actions
export default mobileShopsListReducer.reducer