/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { randomResultApi } from '@/api/service'

//write type for allResults
export type UserResult = {
   userName: string
   randomNumber: number
   _id: string
   _v: number
}

export interface RandomResultSlice {
   allResults: [UserResult] | null
   loading: boolean
   error: any
}

const INITIAL_STATE = {
   allResults: null,
   loading: false,
   error: null,
} as RandomResultSlice

// export const getAllResults = createAsyncThunk(
//    'randomResult/getAllResults',
//    randomResultApi.getAllResults,
// )

export const getAllResults = createAsyncThunk('randomResult/getAllResults', async () => {
   const response = await randomResultApi.getAllResults()
   return response.data // Only return the data, not the entire response
})

const randomResultSlice = createSlice({
   name: 'randomResults',
   initialState: INITIAL_STATE,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllResults.pending, (state) => {
            state.loading = true
         })
         .addCase(getAllResults.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.allResults = action.payload
         })
         .addCase(getAllResults.rejected, (state, action) => {
            state.loading = false
            state.allResults = null
            state.error = action.payload
         })
   },
})

export default randomResultSlice.reducer
