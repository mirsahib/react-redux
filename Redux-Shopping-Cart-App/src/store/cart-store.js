import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemList: [],
        totalQuantity: 0,
        showCart: false,
        change:false
    },
    reducers: {
        replaceData(state,action){
            state.totalQuantity = action.payload.totalQuantity
            state.itemList = action.payload.itemList
        },
        addToCart(state, action) {
            state.change = true
            const newItem = action.payload
            const existItem = state.itemList.find(item => item.id === newItem.id)
            if (existItem) {
                existItem.quantity++
                existItem.totalPrice += newItem.price
            } else {
                state.itemList.push(
                    {
                        id: newItem.id,
                        price: newItem.price,
                        quantity: 1,
                        totalPrice: newItem.price,
                        name: newItem.name
                    }
                )
                state.totalQuantity++
            }
        },
        removeFromCart(state, action) {
            state.change=true
            const id = action.payload
            const existItem = state.itemList.find(item => item.id === id)
            if (existItem.quantity === 1) {
                state.itemList = state.itemList.filter(item => item.id !== id)
                state.totalQuantity--
            } else {
                existItem.quantity--
                existItem.totalPrice -= existItem.price
            }
        },
        showCart(state) {
            state.showCart = !state.showCart
        }
    }
})
export const cartAction = cartSlice.actions
export default cartSlice