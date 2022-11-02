import { createSlice } from '@reduxjs/toolkit'
export const actualRegionReducer = createSlice({

  name: 'actualRegion',
  initialState: {
    selectedRegion: 'f662faa5-029b-11e8-8dcf-0015179b1da1'
  },
  reducers: {

    setRegion: (state, action) => {
      state.settings = action.payload
    },
    defaultRegion: (state, action) => {
      state.settings = 'f662faa5-029b-11e8-8dcf-0015179b1da1'
    }

  }

})

export const { setRegion, defaultRegion } = actualRegionReducer.actions
export default actualRegionReducer.reducer