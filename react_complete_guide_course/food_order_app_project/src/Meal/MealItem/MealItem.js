//import { react } from "@babel/types";
import React,{useContext} from "react";

import classes from "./MealItem.module.css"
//import Input from "../UI/Input/Input"
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

function MealItem(props) {
	const price = `$${props.price.toFixed(2)}`;
	const cartContext = useContext(CartContext);
	const submitHandler = (amount) =>
	{
		cartContext.onAddToCart(props.id, amount);
	}
	return (
			<li className={classes.meal}>
				<div >
					<h3>{props.name}</h3>
					<div className={classes.description}>{props.description}</div>
					<div className={classes.price}>{price}</div>
				</div>
					<MealItemForm onSubmit={submitHandler} id={props.id}/>
			</li>
	);
}


export default MealItem;