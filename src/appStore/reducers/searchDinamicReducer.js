import { createSlice } from '@reduxjs/toolkit'
export const searchDinamicReducer = createSlice({

  name: 'searchDinamic',
  initialState: {
    products: '[]',
    showResults: false,
    history: '[{"text": "Похожие запросы"},{"text": "Аккумуляторы varta"},{"text": "Моторное масло"}]'
  },
  reducers: {

    refreshResults: (state, action) => {

      state.products = action.payload

    },
    setShowResults: (state, action) => {

      state.showResults = action.payload

    },
    setHistory: (state, action) => {

      state.history = action.payload

    }

  }

})

export const { refreshResults, setShowResults, setHistory } = searchDinamicReducer.actions
export default searchDinamicReducer.reducer