import { createSlice } from '@reduxjs/toolkit'
export const mobileScrollReducer = createSlice({

  name: 'mobileScroll',
  initialState: {
    active: false
  },
  reducers: {

    changeActive: (state, action) => {
      state.active = action.payload
    }

  }

})

export const { changeActive } = mobileScrollReducer.actions
export default mobileScrollReducer.reducer