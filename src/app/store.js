import { configureStore } from '@reduxjs/toolkit'
import CurrentGroup_Slice from '../features/CurrentGroup/CurrentGroup_Slice'
import TaskSortDirectionSlice from '../features/TaskSortDirection/TaskSortDirection_Slice'

export default configureStore({
  reducer: {
    CurrentGroup: CurrentGroup_Slice,
    TaskSortDirection: TaskSortDirectionSlice,
  }
})