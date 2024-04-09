import { configureStore } from '@reduxjs/toolkit'

import appReducer from './slices/appSlice'
import postReducer from './slices/postSlice'
import randomResultReducer from './slices/randomResultSlice'

const store = configureStore({
   reducer: {
      app: appReducer,
      posts: postReducer,
      randomResults: randomResultReducer,
   },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {app: AppState}
export type AppDispatch = typeof store.dispatch

export default store
