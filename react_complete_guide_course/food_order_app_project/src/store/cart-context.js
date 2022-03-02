import React, {useReducer} from "react";
import {DUMMY_MEALS} from "./dummy-meals";

import useHttp from "../hooks/use-http";


const CartContext = React.createContext({
	cartItems: {},// dictionary for efficient add/remove operations
	orderTotal: 0.0,
	numItems: 0,
	showCart: false,
	onAddToCart: (id, amount) => {},
	onSubmitOrder: () => {},
	onToggleCart: () => {}
});

const cartReducer = (state, action) => {
	const localState = {...state}; // make a new object based on the old state. edit this one to make the function pure
	if(action.type === "TOGGLE_CART")
	{
		localState.showCart = !localState.showCart;
		return localState;///!!!!important cant return state object cuz react does not know we edited memory in state object
	}
	else if(action.type === "ADD_TO_CART")
	{
		const id = action.val.id;
		const amount = Number(action.val.amount);
		if(id in localState.cartItems)//item in cart
		{
			const price = DUMMY_MEALS[id].price;
			const prevAmount = Number(localState.cartItems[id].amount);
			//tate.numItems -= prevAmount; // subtract prev amount from state
			let newAmount = prevAmount + amount;
			if(newAmount< 0)
			{
				return localState;//dont allow removing more items than we have in cart
			}
			localState.orderTotal += amount * price;
			localState.cartItems[id].amount =  newAmount;
			localState.numItems += amount;
			
			if(newAmount === 0)
			{
				delete localState.cartItems[id];
			}
			return localState;
		}
		else//item not in cart 
		{
			if(amount > 0)
			{
				const name = DUMMY_MEALS[id].name;
				const price = DUMMY_MEALS[id].price;
				
				localState.cartItems[id] = {name: name, amount: (amount), price: price};
				localState.numItems += amount;
				localState.orderTotal += amount * price;
				localState.orderTotal = Number(localState.orderTotal.toFixed(2));
				return localState;
			}
			else
			{
				return state;// return old state
			}
		}
		
	}
	else if(action.type === "RESET_CART")
	{
		localState.cartItems = {};
		localState.numItems = 0;
		localState.orderTotal = 0.0;
		localState.showCart = false;
		return localState;
	}
	return {cartItems: {}, orderTotal: 0.0, numItems: 0, showCart: false};
};

export const CartContextProvider = (props) => {

	const {isLoading, error, sendRequest:addOrderRequest} = useHttp();
	const [cartState, dispatchCart] = useReducer(cartReducer, {cartItems: {},
			orderTotal: 0.0, numItems: 0, showCart: false});
	//const [showCart, setShowCart] = useState(false);

	const addToCartHandler = (id, amount) =>
	{
		dispatchCart({type: "ADD_TO_CART", val: {id: id, amount: amount} });
	};
	const toggleCartHandler = () => {
		dispatchCart({type: "TOGGLE_CART"});
	};

	const submitOrderHandler = (userData) => {
		if(cartState.numItems === 0)
		{
			//console.log("cant submit order. empty cart");
			return;
		}
		//console.log("submitting order");
		//console.log("cart state ",cartState);
		addOrderRequest({
			url: "https://react-test-7bc77-default-rtdb.firebaseio.com/orders.json", method: "POST",
			headers: {'Content-Type': 'application/json',}, body: {userData: userData, cart: cartState.cartItems}
		  }, (data) => {return data});
		  if(!error)
		  {
		  	dispatchCart({type: "RESET_CART"});
		  }
	};


	return <CartContext.Provider value={{
				cartItems: cartState.cartItems,
				orderTotal: cartState.orderTotal,
				numItems: cartState.numItems,
				showCart: cartState.showCart,
				onToggleCart: toggleCartHandler,
				onAddToCart:addToCartHandler,
				onSubmitOrder: submitOrderHandler,
				
				isLoading: isLoading,
				error: error}}>
			{props.children}
		</CartContext.Provider>

};


export default CartContext;