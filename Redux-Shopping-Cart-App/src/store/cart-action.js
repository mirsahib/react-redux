import { cartAction } from "./cart-store"
import { uiAction } from "./ui-store"

export const fetchCartData = (cart)=>{
    return async(dispatch)=>{
        const fetchHandler = async()=>{
            const res = await fetch('https://redux-shopping-cart-c3245-default-rtdb.asia-southeast1.firebasedatabase.app/cartItem.json')
            const data = await res.json()
            return data
        }
        try {
            const cartData = await fetchHandler()
            dispatch(cartAction.replaceData(cartData))
        } catch (error) {
            dispatch(uiAction.showNotification({
                message: "Sending message failed",
                type: "error",
                open: true
            }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiAction.showNotification({
            message: "Sending Request.....",
            type: "warning",
            open: true
        }))
        const sendRequest = async () => {
            const res = await fetch('https://redux-shopping-cart-c3245-default-rtdb.asia-southeast1.firebasedatabase.app/cartItem.json', {
                method: 'PUT',
                body: JSON.stringify(cart),
            })
            const data = await res.json()
            dispatch(uiAction.showNotification({
                message: "Request sent successfully",
                type: "success",
                open: true
            }))
        }
        try {
            await sendRequest()
        } catch (error) {
            dispatch(uiAction.showNotification({
                message: "Sending message failed",
                type: "error",
                open: true
            }))
        }
    }
}
