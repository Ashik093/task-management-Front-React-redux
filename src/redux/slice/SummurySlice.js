import { createSlice } from '@reduxjs/toolkit'

export const SummurySlice = createSlice({
    name: 'summury',
    initialState: {
        summury: [],
    },
    reducers: {
        setSummury: (state, action) => {
            state.summury = action.payload
        }
    },
})

export const { setSummury } = SummurySlice.actions

export default SummurySlice.reducer