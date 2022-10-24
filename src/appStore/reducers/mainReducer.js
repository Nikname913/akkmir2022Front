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
    catalogMenu: [],
    ordersCount: 0,
    sravnenieCount: 2,
    actualItem: null,
    actualCategory: { 
      id: null, 
      label: null 
    },
    mobile: false,
    models: [
      'Acura',
      'AlfaRomeo',
      'Audi',
      'BMW',
      'Geely',
      'GMC',
      'GreatWall',
      'Hafei',
      'Brilliance',
      'Cadillac',
      'Chery',
      'Chevrolet',
      'Honda',
      'Hummer',
      'Hyundai',
      'Infiniti',
      'Chrysler',
      'Citroen',
      'Daewoo',
      'Datsun',
      'IranKhodro',
      'Jaguar',
      'Jeep',
      'Kia',
      'Dodge',
      'Fiat',
      'Ford',
      'Geely',
      'Land Rover',
      'Lexus',
      'Lifan',
      'Lincoln',
      'GMC',
      'GreatWall',
      'Hafei',
      'Honda',
      'Maserati',
      'Mazda',
      'Mercedes-Benz'
    ],
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
    }
    
  }
})

export const { productPageReducer,
  setOrdersCount,
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
  setCatalogEnginesRemote } = mainReducer.actions
export default mainReducer.reducer