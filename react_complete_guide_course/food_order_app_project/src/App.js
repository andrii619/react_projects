
import React, { useContext} from "react";
import Header from "./UI/Header/Header";
import MealsSummary from "./Meal/MealsSummary/MealsSummary";
import AvailableMeals from "./Meal/AvailableMeals/AvailableMeals";
import { DUMMY_MEALS } from "./store/dummy-meals";
import Cart from "./Cart/Cart";
import CartContext from "./store/cart-context";

//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
function App() {
	const cartContext = useContext(CartContext);
  return (
<React.Fragment>
	{cartContext.showCart && <Cart/> }
    <Header/>
	<main>
		<MealsSummary/>
		<AvailableMeals mealItems={DUMMY_MEALS}/>
	</main>
</React.Fragment>
  );
}

export default App;
