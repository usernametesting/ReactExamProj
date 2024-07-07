import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { filterBy } from '../../enums/filterCondition';
export const countriesApi = createApi({

    reducerPath: 'countriesApi',

    baseQuery: fetchBaseQuery({
        baseUrl: "https://restcountries.com/v3.1/",
    }),

    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => 'all'
        }),
        getFilteredCountries: builder.query({

            query: ({ conditionType, condition }) => {

                if (condition == undefined || condition == "")
                    return 'all';

                switch (conditionType) {

                    case filterBy.name:
                        return `${filterBy.name}/${condition}`;

                    case filterBy.fullName:
                        return `${filterBy.name}/${condition}?${filterBy.fullName = true}`;

                    case filterBy.code:
                        return `${filterBy.code}/${condition}`;
                }
            }
        }),
        
    })
})


export const { useGetCountriesQuery, useGetFilteredCountriesQuery } = countriesApi;