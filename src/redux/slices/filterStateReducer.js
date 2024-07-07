import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    filterComponentState:false
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveStatus: (state, action) => {
            const { filterComponentState } = action.payload;
            state.filterComponentState =filterComponentState;
        },
    }
});


export const { setActiveStatus } = filterSlice.actions;
export default filterSlice.reducer;