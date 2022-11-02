import { createSlice } from '@reduxjs/toolkit'
export const mainReducer = createSlice({

  name: 'main',
  initialState: {
    actualOrder: [],
    modalShow: false,
    modalContent: false,
    messageShow: false,
    messageContent: {
      title: '-- -- -- --',
      message: '-- -- -- --'
    },
    productPageDiscriptionFork: 0,
    catalogMenuRemote: '',
    catalogPropsRemote: '',
    catalogMarksRemote: '',
    catalogModelsRemote: '',
    catalogGenerationsRemote: '',
    catalogEnginesRemote: '',
    catalogDirsRemote: '',
    catalogShopsRemote: '',
    catalogMenu: [],
    ordersCount: 0,
    sravnenieCount: 2,
    tradeInCount: 0,
    actualItem: null,
    actualCategory: { 
      id: null, 
      label: null 
    },
    mobile: false,
    models: [ null ],
    infoPageTitle: ''
  },
  reducers: {

    productPageReducer: (state, action) => {
      state.productPageDiscriptionFork = action.payload
    },
    setInfoPageTitle: (state, action) => {
      state.infoPageTitle = action.payload
    },
    setOrdersCount: (state, action) => {
      state.ordersCount = action.payload
    },
    setTadeInCount: (state, action) => {
      state.tradeInCount = action.payload
    },
    setSravnenieCount: (state, action) => {
      state.sravnenieCount = action.payload
    },
    setActualItem: (state, action) => {
      state.actualItem = action.payload
    },
    setActualCategory: (state, action) => {
      state.actualCategory = action.payload
    },
    setModalShow: (state, action) => {
      state.modalShow = action.payload
    },
    setModalContent: (state, action) => {
      state.modalContent = action.payload
    },
    setMessageShow: (state, action) => {
      state.messageShow = action.payload
    },
    setMessageContent: (state, action) => {
      state.messageContent = action.payload
    },
    setMobile: (state, action) => {
      state.mobile = true
    },
    setCatalogMenuRemote: (state, action) => {
      state.catalogMenuRemote = action.payload
    },
    setCatalogPropsRemote: (state, action) => {
      state.catalogPropsRemote = action.payload
    },
    setCatalogMarksRemote: (state, action) => {
      state.catalogMarksRemote = action.payload
    },
    setCatalogModelsRemote: (state, action) => {
      state.catalogModelsRemote = action.payload
    },
    setCatalogGenerationsRemote: (state, action) => {
      state.catalogGenerationsRemote = action.payload
    },
    setCatalogEnginesRemote: (state, action) => {
      state.catalogEnginesRemote = action.payload
    },
    setCatalogDirsRemote: (state, action) => {
      state.catalogDirsRemote = action.payload
    },
    setCatalogShopsRemote: (state, action) => {
      state.catalogShopsRemote = action.payload
    }
    
  }
})

export const { productPageReducer,
  setOrdersCount,
  setTadeInCount,
  setSravnenieCount,
  setActualItem,
  setActualCategory,
  setModalShow,
  setModalContent,
  setMessageShow,
  setMessageContent,
  setMobile,
  setInfoPageTitle,
  setCatalogMenuRemote,
  setCatalogPropsRemote,
  setCatalogMarksRemote,
  setCatalogModelsRemote,
  setCatalogGenerationsRemote,
  setCatalogEnginesRemote,
  setCatalogDirsRemote,
  setCatalogShopsRemote } = mainReducer.actions
export default mainReducer.reducer