import classes from "./Header.module.css"
import React from "react"
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";

function Header(props) {
	return <React.Fragment>
	<header className={classes.header}>
		<h1>ReactMeals</h1>
		<HeaderCartButton />
		</header>
		<div className={classes["main-image"]}>
			{/*<img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" 
alt=""></img>*/}
			<img src={mealsImage} alt=""/>
		</div>	
	</React.Fragment>
}



export default Header;