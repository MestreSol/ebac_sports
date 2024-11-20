import { configureStore } from '@reduxjs/toolkit'
import produtoReducer from './produtoSlice'

const store = configureStore({
  reducer: {
    produto: produtoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
