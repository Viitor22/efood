import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../Models/restaurant'

type DeliveryPayload = {
    products: {
        id: number
        price: number
    }
    delivery: {
        receiver: string
        adress: {
            description: string
            city: string
            zipCode: string
            number: number
            complement: string
        }
    }
    payment: {
        card: {
            name: string
            number: string
            code: number
            expires: {
                month: number
                year: number
            }
        }
    }
}

type PurchaseResponse = {
    orderId: string
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
    }),
    endpoints: (builder) => ({
        getRestaurant: builder.query<Restaurant[], void>({
            query: () => 'restaurantes'
        }),
        delivery: builder.mutation<PurchaseResponse, DeliveryPayload >({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        }),
    })
})

export const {useGetRestaurantQuery, useDeliveryMutation} = api
export default api