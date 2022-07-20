import { createSlice } from '@reduxjs/toolkit'
export const makeOrderReducer = createSlice({

  name: 'newOrder',
  initialState: {
    number: null,
    model: null,
    name: null,
    email: null,
    paytype: null,
    diliverytype: null,
    address: null
  },
  reducers: {

    setNumber: (state, action) => {
      state.number = action.payload
    },
    setModel: (state, action) => {
      state.model = action.payload
    },
    setName: (state, action) => {
      state.name = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPaytype: (state, action) => {
      state.paytype = action.payload
    },
    setDiliverytype: (state, action) => {
      state.diliverytype = action.payload
    },
    setAddress: (state, action) => {
      state.address = action.payload
    },

  }
})

export const { setNumber,
  setModel,
  setName,
  setEmail,
  setPaytype,
  setDiliverytype,
  setAddress } = makeOrderReducer.actions
export default makeOrderReducer.reducer