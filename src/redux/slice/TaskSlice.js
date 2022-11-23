import { createSlice } from '@reduxjs/toolkit'

export const TaskSlice = createSlice({
    name: 'task',
    initialState: {
        task: [],
    },
    reducers: {
        setTask: (state, action) => {

            state.task = action.payload
        }

    },
})

export const { setTask } = TaskSlice.actions

export default TaskSlice.reducer