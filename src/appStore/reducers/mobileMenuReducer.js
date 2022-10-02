import { createSlice } from '@reduxjs/toolkit'
export const mobileMenuReducer = createSlice({

  name: 'mobileMenu',
  initialState: {
    active: 0
  },
  reducers: {

    changeActive: (state, action) => {
      state.active = action.payload
    }

  }

})

export const { changeActive } = mobileMenuReducer.actions
export default mobileMenuReducer.reducer