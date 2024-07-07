import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    selectedButtonIndex:0
}

const filterButtonStateSlice = createSlice({
    name: 'filterButtonState',
    initialState,
    reducers: {
        setIndex: (state, action) => {
            const { selectedButtonIndex } = action.payload;
            state.selectedButtonIndex =selectedButtonIndex;
        },
    }
});


export const { setIndex } = filterButtonStateSlice.actions;
export default filterButtonStateSlice.reducer;