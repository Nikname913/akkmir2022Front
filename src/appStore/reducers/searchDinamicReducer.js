import { createSlice } from '@reduxjs/toolkit'
export const searchDinamicReducer = createSlice({

  name: 'searchDinamic',
  initialState: {
    products: '[]',
    showResults: false,
  },
  reducers: {

    refreshResults: (state, action) => {

      state.products = action.payload

    },
    setShowResults: (state, action) => {

      state.showResults = action.payload

    }

  }

})

export const { refreshResults, setShowResults } = searchDinamicReducer.actions
export default searchDinamicReducer.reducer