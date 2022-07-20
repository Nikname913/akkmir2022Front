import { createSlice } from '@reduxjs/toolkit'
export const authReducer = createSlice({

  name: 'auth',
  initialState: {
    auth: null,
    authType: null,
    authObject: null
  },
  reducers: {

    changeAuth: (state, action) => {
      state.auth = action.payload
    },
    changeAuthType: (state, action) => {
      state.authType = action.payload
    },
    changeAuthObject: (state, action) => {
      state.authObject = action.payload
    }

  }

})

export const { changeAuth, changeAuthType, changeAuthObject } = authReducer.actions
export default authReducer.reducer