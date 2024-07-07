import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    selectedRegion: ''
}

const selectedRegionSlice = createSlice({
    name: 'selectedRegionReducer',
    initialState,
    reducers: {
        setRegion: (state, action) => {
            const { selectedRegion } = action.payload;
            state.selectedRegion = selectedRegion;
        },
    }
});


export const { setRegion } = selectedRegionSlice.actions;
export default selectedRegionSlice.reducer;