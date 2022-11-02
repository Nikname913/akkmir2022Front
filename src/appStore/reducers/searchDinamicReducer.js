import { createSlice } from '@reduxjs/toolkit'
export const searchDinamicReducer = createSlice({

  name: 'searchDinamic',
  initialState: {
    products: '[]',
    showResults: false,
    history: '[{"text": "Похожие запросы"},{"text": "Аккумуляторы varta"},{"text": "Моторное масло"}]',
    letters: [
      { 'а': 'a' },
      { 'б': 'b' },
      { 'в': 'v' },
      { 'г': 'g' },
      { 'д': 'd' },
      { 'е': 'e' },
      { 'ж': 'zh' },
      { 'з': 'z' },
      { 'и': 'i' },
      { 'й': 'y' },
      { 'к': 'k' },
      { 'л': 'l' },
      { 'м': 'm' },
      { 'н': 'n' },
      { 'о': 'o' },
      { 'п': 'p' },
      { 'р': 'r' },
      { 'с': 's' },
      { 'т': 't' },
      { 'у': 'u' },
      { 'ф': 'ph' },
      { 'x': 'h' },
      { 'х': 'kh' },
      { 'ц': 'c' },
      { 'ч': 'ch' },
      { 'ш': 'sh' },
      { 'щ': 'sch' },
      { 'ъ': '' },
      { 'ы': 'y' },
      { 'ь': '' },
      { 'э': 'e' },
      { 'ю': 'u' },
      { 'ю': 'yu' },
      { 'я': 'ya' },
    ]
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