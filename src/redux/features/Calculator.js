import { createSlice } from "@reduxjs/toolkit";

const getStoredCalculation = () => {

    try {
        const storedCalculation = localStorage.getItem('Calculation');
        const forbiddenEntries = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$^&()_-=`~?><,';:[]{}|".split('');

        if (!Array.isArray(storedCalculation) && storedCalculation !== null && storedCalculation !== undefined && !forbiddenEntries.some(entry => storedCalculation.includes(entry))) {
            return typeof storedCalculation === 'string' ? storedCalculation : storedCalculation.toString();
        }
    } catch {
        return '0'
    }
}


const CalcSlice = createSlice({
    name: 'Calculator',
    initialState: {
        Calculation: getStoredCalculation() || '0'
    },
    reducers: {
        updateCalculation(state, action) {
            const { result } = action.payload;
            const forbiddenEntries = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$^&()_-=`~?><,';:[]{}|".split('');

            if (!Array.isArray(result) && result !== null && result !== undefined && !forbiddenEntries.some(entry => result.includes(entry))) {
                state.Calculation = result;
                localStorage.setItem('Calculation', typeof result === 'string' ? result : result.toString());
            }
        }
    }
})

export const { updateCalculation } = CalcSlice.actions;

export default CalcSlice.reducer;