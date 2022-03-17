



import { createSlice } from "@reduxjs/toolkit";


const initialCartState = {cartTotalItems: 0, totalPrice: 0.0, cartItems: {}, changed: false};






const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        setCart(state, action)
        {
            state.cartItems = action.payload.cartItems;
            state.cartTotalItems = action.payload.cartTotalItems;
            state.totalPrice = action.payload.totalPrice;
        },
        addItemToCart(state, action)
        {
            if(action.payload.title in state.cartItems)
            {
                state.cartItems[action.payload.title].amount++;
                state.cartTotalItems++;
                state.totalPrice += action.payload.price;
                state.changed = true;
            }
            else
            {
                state.cartItems[action.payload.title] = {amount:1, price: action.payload.price};
                state.cartTotalItems++;
                state.totalPrice += action.payload.price;
                state.changed = true;
            }
        },
        increaseAmount(state, action)
        {
            if( !(action.payload.title in state.cartItems) )
            {
                return;
            }
            state.cartTotalItems++;
            state.totalPrice += action.payload.price;
            state.cartItems[action.payload.title].amount++;
            state.changed = true;
        },
        decreaseAmount(state,action)
        {
            if( !(action.payload.title in state.cartItems) )
            {
                return;
            }
            if(state.cartItems[action.payload.title].amount === 1)
            {
                // remove item from cart 
                delete state.cartItems[action.payload.title];
                state.totalPrice -= action.payload.price;
                state.cartTotalItems--;
            }
            else
            {
                state.cartTotalItems--;
                state.totalPrice -= action.payload.price;
                state.cartItems[action.payload.title].amount--;
            }
            state.changed = true;
            
            
        }
    }

});




export const cartActions = cartSlice.actions;
export default cartSlice.reducer;












