import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartData, sendCartData } from "./store/cart-action";

let firstRender = true

function App() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const notification = useSelector(state => state.ui.notification)
  const cart = useSelector(state => state.cart)

  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])
  useEffect(() => {
    if (firstRender) {
      firstRender = false
      return
    }
    if(cart.change){
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch])


  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message} />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
