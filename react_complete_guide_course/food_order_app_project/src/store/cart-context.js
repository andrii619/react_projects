import React, {useState} from "react";
import {DUMMY_MEALS} from "./dummy-meals";


const CartContext = React.createContext({
	cart: {},// dictionary for efficient add/remove operations
	orderTotal: 0.0,
	numItems: 0,
	showCart: false,
	onAddToCart: () => {},
	onSubmitOrder: () => {}
});


export const CartContextProvider = (props) => {
	/*const [cartItems, setCartItems] = useState({
		m1: {name:"sushi", amount:5, price:2.1},
		m2: {name:"kiwi", amount:2, price:2.9}
		});*/
	const [cartItems, setCartItems] = useState({});
	const [orderTotal, setOrderTotal] = useState(0.0);
	const [numItems, setNumItems] = useState(0);
	const [showCart, setShowCart] = useState(false);

	const addToCartHandler = (id, amount) =>
	{
		// increment cart item by a value or add a new cart item if not there
		if(id in cartItems)
		{
			setCartItems((prevCart) => {
				prevCart[id].amount =  Number(prevCart[id].amount) + Number(amount);
				return prevCart;
			});
		}
		else
		{
			setCartItems((prevCart) => {
				const name = DUMMY_MEALS[id].name;
				const price = DUMMY_MEALS[id].price;
				prevCart[id] = {name: name, amount: Number(amount), price: price};
				return prevCart;
			});
		}
		/*setCartItems((prevCart) => {
			const {id, name, amount} = mealItem;
			const prevAmount = prevCart[id]?.amount || 0;
			prevCart[id] = {id: id, name: name, amount: (amount+prevAmount)};
			return prevCart;
		});*/
		setNumItems((prevNumItems) => { return Number(prevNumItems) + Number(amount)});
		setOrderTotal((prevOrderTotal)=>{
			return prevOrderTotal + amount * DUMMY_MEALS[id].price;
		});
	};
	const toggleCartHandler = () => {
		//change amount of an item in cart to some specifiv amount 
		console.log("toggle cart", showCart);
		setShowCart((prevShowCart)=>{return !prevShowCart;});
	};

	const submitOrderHandler = (props) => {

	};


	return <CartContext.Provider value={{
				cart: cartItems,
				orderTotal: orderTotal,
				numItems: numItems,
				showCart: showCart,
				onToggleCart: toggleCartHandler,
				onAddToCart:addToCartHandler}}>
			{props.children}
		</CartContext.Provider>

};


export default CartContext;