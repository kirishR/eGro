import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import PaypalExpressBtn from 'react-paypal-express-checkout';
import {  getCartItems } from "../../actions";
 
export default function MyApp() {
   
    const cart = useSelector((state) => state.cart);
    const auth = useSelector((state) => state.auth);
    // const cartItems = cart.cartItems;
    const [cartItems, setCartItems] = useState(cart.cartItems);
    const dispatch = useDispatch();
  
    useEffect(() => {
      setCartItems(cart.cartItems);
    }, [cart.cartItems]);
  
    useEffect(() => {
      if (auth.authenticate) {
        dispatch(getCartItems());
      }
    }, [auth.authenticate]);


        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
                console.log("The payment was succeeded!", payment);
                // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }
 
        const totalPrice=Object.keys(cart.cartItems).reduce((totalPrice, key) => {
            const { price, qty } = cart.cartItems[key];
            return totalPrice + price * qty;
          }, 0)
          console.log(totalPrice,'cd')

        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        let total = totalPrice; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox:    'ARwVn5s2A43M3rESzcyqMiziWcStuR-wxlMsp_HYINxV7_cq5rT7etrtfwy0bnBHDyelLEkQay2ColC1',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    
}