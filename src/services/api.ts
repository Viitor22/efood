import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../Models/restaurant'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
    }),
    endpoints: (builder) => ({
        getRestaurant: builder.query<Restaurant[], void>({
            query: () => 'restaurantes'
        })
    })
})

export const {useGetRestaurantQuery} = api
export default api