import React, {useReducer} from "react";
import {DUMMY_MEALS} from "./dummy-meals";


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
	if(action.type === "TOGGLE_CART")
	{
		state.showCart = !state.showCart;
		return {...state};///!!!!important cant return state object cuz react does not know we edited memory in state object
	}
	else if(action.type === "ADD_TO_CART")
	{
		const id = action.val.id;
		const amount = Number(action.val.amount);
		if(id in state.cartItems)//item in cart
		{
			const price = DUMMY_MEALS[id].price;
			const prevAmount = Number(state.cartItems[id].amount);
			//tate.numItems -= prevAmount; // subtract prev amount from state
			let newAmount = prevAmount + amount;
			if(newAmount< 0)
			{
				return state;//dont allow removing more items than we have in cart
			}
			state.orderTotal += amount * price;
			state.cartItems[id].amount =  newAmount;
			state.numItems += amount;
			
			if(newAmount === 0)
			{
				delete state.cartItems[id];
			}
			return {...state};
		}
		else//item not in cart 
		{
			if(amount > 0)
			{
				const name = DUMMY_MEALS[id].name;
				const price = DUMMY_MEALS[id].price;
				
				state.cartItems[id] = {name: name, amount: (amount), price: price};
				state.numItems += amount;
				state.orderTotal += amount * price;
				state.orderTotal = Number(state.orderTotal.toFixed(2));
				return {...state};
			}
			else
			{
				return state;// return old state
			}
		}
		
	}
	return {cartItems: {}, orderTotal: 0.0, numItems: 0, showCart: false};
};

export const CartContextProvider = (props) => {

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

	const submitOrderHandler = () => {
		if(cartState.numItems === 0)
		{
			console.log("cant submit order. empty cart");
			return;
		}
		console.log("submitting order");
	};


	return <CartContext.Provider value={{
				cartItems: cartState.cartItems,
				orderTotal: cartState.orderTotal,
				numItems: cartState.numItems,
				showCart: cartState.showCart,
				onToggleCart: toggleCartHandler,
				onAddToCart:addToCartHandler,
				onSubmitOrder: submitOrderHandler}}>
			{props.children}
		</CartContext.Provider>

};


export default CartContext;