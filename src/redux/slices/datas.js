import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    countries: []
}

const dataSlice = createSlice({
    
    name: 'datas',
    initialState,
    reducers: {
        setDatas: (state, action) => {
            const { filteredCountries } = action.payload;
            state.countries = filteredCountries;
        },
    }
});





export const { setDatas } = dataSlice.actions;
export default dataSlice.reducer;