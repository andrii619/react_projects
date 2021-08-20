//import { react } from "@babel/types";
import React from "react";

import classes from "./MealItem.module.css"
//import Input from "../UI/Input/Input"
import MealItemForm from "./MealItemForm";

function MealItem(props) {
	return (
			<li className={classes.meal}>
				<div >
					<h3>{props.name}</h3>
					<div className={classes.description}>{props.description}</div>
					<div className={classes.price}>${props.price}</div>
				</div>
					<MealItemForm />
{/* 				<Input labelText="Amount"/> */}
			</li>
	);
}


export default MealItem;