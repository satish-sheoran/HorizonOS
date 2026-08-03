import { createSlice } from "@reduxjs/toolkit";
import { Clock_Options } from "../../constants/Clock";


const ClockSlice = createSlice({
    name: 'Clock',
    initialState: {
        ActiveTab: Clock_Options.find(({ option }) => option === 'World Clock')
    },
    reducers: {
        setActiveTab(state, action) {
            const { option } = action.payload
            state.ActiveTab = Clock_Options.find(({ option: OPTION }) => OPTION === option) ?? Clock_Options.find(({ option }) => option === 'World Clock')
        },
        ResetClock(state) {
            state.ActiveTab = Clock_Options.find(({ option }) => option === 'World Clock')
        }
    }
})


export const { setActiveTab ,ResetClock} = ClockSlice.actions;
export default ClockSlice.reducer;