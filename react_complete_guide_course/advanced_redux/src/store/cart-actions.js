



import { uiActions } from "./ui-slice";

import { cartActions } from "./cart";


export const fetchCartData = () => {
    return async (dispatch) => {


        const fetchData = async () => {
            const response = await fetch("https://react-test-7bc77-default-rtdb.firebaseio.com/cart.json");
            if(!response.ok)
            {
                throw new Error("Fetching cart failes");
            }

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            if(cartData)
            {
                // set cart data
                dispatch(cartActions.setCart({
                    cartItems: cartData.cartItems || [],
                    totalPrice: cartData.totalPrice || 0.0,
                    cartTotalItems: cartData.cartTotalItems || 0
                }));
            }
        }
        catch(error) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Error",
                message: "Error fetching"
            }));
        };
    };
};


export const sendCartData = (cartData) => {
    //return {type: "", payload: {}};
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: "pending",
            title: "Sending",
            message: "sending request"
        }));


        const sendRequest = async () => {
            const response = await fetch('https://react-test-7bc77-default-rtdb.firebaseio.com/cart.json',
                    {method: "PUT", body: JSON.stringify({
                        cartItems: cartData.cartItems,
                        totalPrice: cartData.totalPrice,
                        cartTotalItems: cartData.cartTotalItems
                    })});
            if(!response.ok)
            {
                throw new Error("Sending cart failes");
            }
        };

        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: "success",
                title: "Success",
                message: "Success sending"
            }));
        }
        catch(error) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Error",
                message: "Error sending"
            }));
        }
    };
};
