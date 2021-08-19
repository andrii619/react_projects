//import { react } from "@babel/types";
import React,{useContext} from "react";

import classes from "./MealItem.module.css"
//import Input from "../UI/Input/Input"
import MealItemForm from "./MealItemForm";
import CartContext from "../store/cart-context";

function MealItem(props) {
	const cartContext = useContext(CartContext);
	const submitHandler = (amount) =>
	{
		cartContext.onAddToCart(props.id, amount);
		/*
		console.log("adding: ", amount);
		// modify cart to add new items 
		const cart = cartContext.cart;
		if(props.id in cart)
		{
			console.log("in cart");
			cart[props.id].amount =  Number(cart[props.id].amount) + Number(amount);///{name: props.name,amount: amount, price: props.price};
		}
		else
		{
			console.log("not in cart");
			cart[props.id] = {name: props.name, amount: Number(amount), price: props.price};
		}
		console.log(cartContext.numItems);
		cartContext.numItems = Number(amount)+cartContext.numItems;
		console.log(cartContext.numItems);
		*/
	}
	return (
			<li className={classes.meal}>
				<div >
					<h3>{props.name}</h3>
					<div className={classes.description}>{props.description}</div>
					<div className={classes.price}>${props.price}</div>
				</div>
					<MealItemForm onSubmit={submitHandler}/>
{/* 				<Input labelText="Amount"/> */}
			</li>
	);
}


export default MealItem;