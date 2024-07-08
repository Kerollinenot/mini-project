import { createSlice } from '@reduxjs/toolkit'
import groups from '../../DB/groups.json'

const initialGroup = groups[0];


export const CurrentGroup_Slice = createSlice({
  name: 'CurrentGroup',
  initialState: {
    title: initialGroup.title,
    description: initialGroup.description,
    id: initialGroup.id,
  },
  reducers: {
    changeID: (state, action) => {
      state.id = action.payload.id;
    },
    changeTitle: (state, action) => {
      state.title = action.payload.title;
    },
    changeDescription: (state, action) => {
      state.description = action.payload.description;
    },
  },
})

export const { changeID, changeTitle, changeDescription } = CurrentGroup_Slice.actions

export default CurrentGroup_Slice.reducer