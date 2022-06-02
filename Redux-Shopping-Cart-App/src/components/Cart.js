import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { cartAction } from "../store/cart-store";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector(state=>state.cart.totalQuantity);
  const dispatch = useDispatch()
  const showCart = ()=>{
    dispatch(cartAction.showCart())
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
