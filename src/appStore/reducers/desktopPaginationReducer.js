import { createSlice } from '@reduxjs/toolkit'
export const desktopPaginationReducer = createSlice({

  name: 'desktopPagination',
  initialState: {
    count: 20
  },
  reducers: {

    increment: (state, action) => {
      state.count = state.count + action.payload
    },
    decrement: (state, action) => {
      if ( state.count > 20 ) { state.count = state.count - action.payload }
    },
    setDefault: (state, action) => {
      state.count = 20
    }

  }

})

export const { increment, decrement, setDefault } = desktopPaginationReducer.actions
export default desktopPaginationReducer.reducer