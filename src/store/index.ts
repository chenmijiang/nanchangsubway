/** @format */

import { configureStore } from '@reduxjs/toolkit'

import switchRouterReducer from './switchRouter.slice'

export const store = configureStore({
  reducer: {
    switchRouter: switchRouterReducer
  },
  middleware: [],
  devTools: process.env.NODE_ENV !== 'production' ? true : false
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
