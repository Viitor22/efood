import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { order } from '../../Models/order'

type CartState = {
    items: order[]
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
        add: (state, action: PayloadAction<order>) => {
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
        }
    }
})

export const {add, close, open, remove} = cartSlice.actions
export default cartSlice.reducer