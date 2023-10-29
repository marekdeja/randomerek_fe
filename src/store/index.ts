import { configureStore } from '@reduxjs/toolkit'

import appReducer from './slices/appSlice'

const store = configureStore({
   reducer: {
      app: appReducer,
   },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {app: AppState}
// export type AppDispatch = typeof store.dispatch

export default store
