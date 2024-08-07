import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Order } from '../../Models/order'

type CartState = {
    items: Order[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Order>) => {
            state.items.push(action.payload)
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
        clear: (state) => {
            state.items = []
        }
    }
})

export const {add, close, open, remove, clear} = cartSlice.actions
export default cartSlice.reducer