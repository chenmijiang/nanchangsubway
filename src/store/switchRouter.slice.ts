/** @format */

import { createSlice } from '@reduxjs/toolkit'

const switchRouter = createSlice({
  name: 'switchRouter',
  initialState: {
    currentRouteIndex: 0
  },
  reducers: {
    setRouteIndex: (state, action) => {
      state.currentRouteIndex = action.payload
    }
  }
})

export const { setRouteIndex } = switchRouter.actions
export default switchRouter.reducer
