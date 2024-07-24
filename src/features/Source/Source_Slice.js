import { createSlice } from '@reduxjs/toolkit'

export const Source_Slice = createSlice({
  name: 'Source',
  initialState: {
    source: 'db', //file or db
  }
})

// export const {  } = Source_Slice.actions

export default Source_Slice.reducer