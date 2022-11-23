import { createSlice } from '@reduxjs/toolkit'

export const SettingSlice = createSlice({
    name: 'setting',
    initialState: {
        loader: 'd-none',
    },
    reducers: {
        show: (state) => {

            state.loader = ''
        },
        hide: (state) => {
            state.loader = 'd-none'
        },

    },
})

export const { show, hide } = SettingSlice.actions

export default SettingSlice.reducer