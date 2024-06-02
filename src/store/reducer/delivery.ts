import {createSlice } from '@reduxjs/toolkit'

const initialState = {
    DeliveryIsOpen: false
}

const DeliverySlice = createSlice({
    name: 'Delivery',
    initialState,
    reducers: {
        openDelivery: (state) => {
            state.DeliveryIsOpen = true
        },
        closeDelivery: (state) => {
            state.DeliveryIsOpen = false
        }
    }
})

export const {openDelivery, closeDelivery} = DeliverySlice.actions
export default DeliverySlice.reducer