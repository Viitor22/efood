import {PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
    checkIsOpen: false,
    total: ''
}

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        openCheck: (state) => {
            state.checkIsOpen = true
        },
        closeCheck: (state) => {
            state.checkIsOpen = false
        },
        totalCheck: (state, action: PayloadAction<string>) => {
            state.total = action.payload
        }
    }
})

export const {openCheck, closeCheck, totalCheck} = checkoutSlice.actions
export default checkoutSlice.reducer