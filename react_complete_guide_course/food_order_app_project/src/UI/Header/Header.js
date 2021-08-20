import classes from "./Header.module.css"
import React, { useContext } from "react"

import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
//import CartContext from "../../store/cart-context";

function Header(props) {
	///console.log(classes["main-image"])
	//const cartContext = useContext(CartContext);
	return <React.Fragment>
	<header className={classes.header}>
		<h1>ReactMeals</h1>
		<HeaderCartButton>Your Cart</HeaderCartButton>
		

		</header>
		<div className={classes["main-image"]}>
			<img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" 
				alt=""></img>
		</div>
{/* 		<img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
			 alt="" className={classes['main-image']}></img> */}
		
	</React.Fragment>
}



export default Header;