import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './reducers/mainReducer'
import catalogReducer from './reducers/catalogReducer'
import makeOrderReducer from './reducers/makeOrderReducer'
import searchDinamicReducer from './reducers/searchDinamicReducer'
import mobileMenuReducer from './reducers/mobileMenuReducer'
import mobileScrollReducer from './reducers/mobileScrollReducer'
import desktopPaginationReducer from './reducers/desktopPaginationReducer'
import selectionSettingsReducer from './reducers/selectionSettingsReducer'
import actualRegionReducer from './reducers/actualRegionReducer'

export default configureStore({
  reducer: {
    main: mainReducer,
    catalog: catalogReducer,
    newOrder: makeOrderReducer,
    searchDinamic: searchDinamicReducer,
    mobileMenu: mobileMenuReducer,
    mobileScroll: mobileScrollReducer,
    desktopPagination: desktopPaginationReducer,
    selectionSettings: selectionSettingsReducer,
    actualRegion: actualRegionReducer
  },
})