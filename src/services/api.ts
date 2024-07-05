import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../Models/restaurant'


type Dish = {
    id: number
    name: string
    price: number
}

type PurchasePayload = {
    order: Dish[]
    billing: {
        name: string
    }
    delivery: {
        adress: string
        city: string
        cep: string
        adressNumber: string
        complement: string
    }
}

type PaymentPayload = {
    payment: {
        name: string
        number: string
        expires: {
            month: string
            year: string
        }
        code: string
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
        purchase: builder.mutation<any, PurchasePayload >({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        }),
        payment: builder.mutation<PurchaseResponse, PaymentPayload >({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        }),
    })
})

export const {useGetRestaurantQuery, usePurchaseMutation, usePaymentMutation} = api
export default api