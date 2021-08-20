import React, {useState} from "react";


const CartContext = React.createContext({
	cart: {},// dictionary for efficient add/remove operations
	orderTotal: 6,
	numItems: 2,
	showCart: false,
	onAddToCart: () => {},
	onRemoveFromCart: () => {},
	onSubmitOrder: () => {}
});


export const CartContextProvider = (props) => {
	const [cartItems, setCartItems] = useState({
		m1: {name:"sushi", amount:5, price:2.1},
		m2: {name:"kiwi", amount:2, price:2.9}
		});
	const [orderTotal, setOrderTotal] = useState(0);
	const [numItems, setNumItems] = useState(0);
	const [showCart, setShowCart] = useState(false);

	const addToCartHandler = (mealItem) =>
	{
		// increment cart item by a value or add a new cart item if not there
		setCartItems((prevCart) => {
			const {id, name, amount} = mealItem;
			const prevAmount = prevCart[id]?.amount || 0;
			prevCart[id] = {id: id, name: name, amount: (amount+prevAmount)};
			return prevCart;
		});
	};
	const removeFromCartHandler = (props) => {
		//decrement cart item by a value or remove cart item completely 
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
				onAddToCart:addToCartHandler, 
				onRemoveFromCart: removeFromCartHandler}}>
			{props.children}
		</CartContext.Provider>

};


export default CartContext;