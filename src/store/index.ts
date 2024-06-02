import {configureStore} from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './reducer/cart'
import checkoutReducer from './reducer/checkout'
import deliveryReducer from './reducer/delivery'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        checkout: checkoutReducer,
        delivery: deliveryReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>