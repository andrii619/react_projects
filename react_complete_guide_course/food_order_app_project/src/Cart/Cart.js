import classes from "./Cart.module.css"
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import {useContext, useState} from "react";
import CartContext from "../store/cart-context";

import Checkout from "./Checkout";

function buildCart(cartItems)
{
	const cartBuild = [];
	for(const item in cartItems)//iterate keys
	{
		cartBuild.push(<CartItem key={item} id={item} name={cartItems[item].name} 
			price={cartItems[item].price} amount={cartItems[item].amount}/>);
	}
	return cartBuild;
}


function Cart(props) {
	const cartContext = useContext(CartContext);
	const [showOrder, setShowOrder] = useState(false);
	//console.log("cart items object", props.cartItems);
	const cart = buildCart(cartContext.cartItems);
	console.log("creating cart");


	const submitCartHandler = (event) => {
		setShowOrder(true);
	}
	const cancelOrderHandler = (event) => {
		setShowOrder(false);
	}

	return <Modal onClose={cartContext.onToggleCart}>
{/* 		<button type="button">Ok</button> */}
		{!showOrder && <ul className={classes["cart-items"]}>
			{
/* 				props.cartItems.map((item) => {
					return <CartItem id={item.id} name={item.name} price={item.price} amount={item.amount}/>
				}) */
/* 				[<CartItem id="a" name="a" price={1} amount="1"/>,
				<CartItem id="b" name="b" price={2} amount="2"/>	] */
				cart
			}
		</ul>}
		<div className={classes.total}>
			<label>Total Amount</label>
			<label>{cartContext.orderTotal.toFixed(2)}</label>
		</div>
		{showOrder && <Checkout onCancel={cancelOrderHandler} onSubmitOrder = {cartContext.onSubmitOrder}/>}
		{!showOrder && 
		<div className={classes.actions}>
			<button onClick={cartContext.onToggleCart}>Close</button>
			<button className={classes['button--alt']} onClick={submitCartHandler} disabled={cartContext.numItems===0}>Order</button>
		</div>}



	</Modal>
};


export default Cart;