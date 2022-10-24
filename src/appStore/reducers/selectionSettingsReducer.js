import { createSlice } from '@reduxjs/toolkit'
export const selectionSettingsReducer = createSlice({

  name: 'selectionSettings',
  initialState: {
    settings: ''
  },
  reducers: {

    setSettings: (state, action) => {
      state.settings = action.payload
    },
    defaultSettings: (state, action) => {
      state.settings = ''
    }

  }

})

export const { setSettings, defaultSettings } = selectionSettingsReducer.actions
export default selectionSettingsReducer.reducer