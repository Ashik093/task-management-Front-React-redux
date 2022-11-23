import { configureStore } from '@reduxjs/toolkit'
import SettingReducer from '../slice/SettingSlice'
import TaskReducer from './../slice/TaskSlice';
import SummuryReducer from './../slice/SummurySlice';

export default configureStore({
    reducer: {
        setting: SettingReducer,
        task: TaskReducer,
        summury: SummuryReducer
    },
})