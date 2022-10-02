import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './reducers/mainReducer'
import catalogReducer from './reducers/catalogReducer'
import makeOrderReducer from './reducers/makeOrderReducer'
import searchDinamicReducer from './reducers/searchDinamicReducer'
import mobileMenuReducer from './reducers/mobileMenuReducer'

export default configureStore({
  reducer: {
    main: mainReducer,
    catalog: catalogReducer,
    newOrder: makeOrderReducer,
    searchDinamic: searchDinamicReducer,
    mobileMenu: mobileMenuReducer
  },
})