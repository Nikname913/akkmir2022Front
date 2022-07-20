import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './reducers/mainReducer'
import catalogReducer from './reducers/catalogReducer'
import makeOrderReducer from './reducers/makeOrderReducer'

export default configureStore({
  reducer: {
    main: mainReducer,
    catalog: catalogReducer,
    newOrder: makeOrderReducer,
  },
})