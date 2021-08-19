
import React, { useContext, useState } from "react";

import Header from "./UI/Header/Header";
import MealsSummary from "./MealsSummary/MealsSummary";
import AvailableMeals from "./AvailableMeals/AvailableMeals";

import { DUMMY_MEALS } from "./store/dummy-meals";
//import Modal from "./UI/Modal/Modal";
import Cart from "./Cart/Cart";

import CartContext from "./store/cart-context";
//import { CartContextProvider } from "./store/cart-context";

/* function getCartItemsDict(mealList)
{
	const cartItems = {};
	for(const mealItem of mealList)
	{
		cartItems[mealItem.id] = {mealName: mealItem.name, amount: 0};
		//cartItems[mealItem.name] = 0;
	}
	return cartItems
} */

/* const CART = {
m1: {name:"sushi", amount:5, price:2.1},
m2: {name:"kiwi", amount:2, price:2.9}
}; */
//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
function App() {
	///const [showCart, setShowCart] = useState(false);
	//console.log(getCartItemsDict(DUMMY_MEALS));
	//const [cartState, setCartState] = useState(getCartItemsDict(DUMMY_MEALS));
	const cartContext = useContext(CartContext);

  return (

<React.Fragment>
	{cartContext.showCart && <Cart/> }
    <Header/>
	<MealsSummary/>
	<AvailableMeals mealItems={DUMMY_MEALS}/>
{/* 	<img src="./UI/Header/meals.jpg" alt="" ></img> */}

</React.Fragment>
  );
}

export default App;
