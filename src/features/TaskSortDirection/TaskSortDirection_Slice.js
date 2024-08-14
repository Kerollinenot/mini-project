import { createSlice } from '@reduxjs/toolkit'

export const TaskSortDirectionSlice = createSlice({
  name: 'CurrentGroup',
  initialState: {
    sortDirection: 'asc',
  },
  reducers: {
    changeDirection: (state) => {
      state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc'
    }
  },
})

export const { changeDirection } = TaskSortDirectionSlice.actions

export default TaskSortDirectionSlice.reducer