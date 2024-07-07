import { configureStore } from '@reduxjs/toolkit';
import { countriesApi } from '../services/apis/countriesApi';
import filterStateReducer from './slices/filterStateReducer';
import datas from './slices/datas';
import filterButtonState from './slices/filterButtonState';
import selectedRegion from './slices/selectedRegion';

const store = configureStore({
    reducer: {
        filter: filterStateReducer,
        datas: datas,
        filterButtonState: filterButtonState,
        selectedRegionReducer: selectedRegion,
        [countriesApi.reducerPath]: countriesApi.reducer

    }
    ,
    middleware: (defaultMiddleware) =>
        defaultMiddleware().concat(countriesApi.middleware)
});

export default store;