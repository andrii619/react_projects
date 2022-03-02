
import React, { useContext ,useEffect, useState} from "react";
import Header from "./UI/Header/Header";
import MealsSummary from "./Meal/MealsSummary/MealsSummary";
import AvailableMeals from "./Meal/AvailableMeals/AvailableMeals";
import { DUMMY_MEALS } from "./store/dummy-meals";
import Cart from "./Cart/Cart";
import CartContext from "./store/cart-context";



import useHttp from "./hooks/use-http";

//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
function App() {
	const cartContext = useContext(CartContext);

	const [availableMeals, setAvailableMeals] = useState({});

	const transformMeals = (mealsObj) => {
		console.log(mealsObj);
		console.log(DUMMY_MEALS);
		setAvailableMeals(mealsObj);
	};

	const {isLoading, error, sendRequest:fetchMeals} = useHttp();

	useEffect(() => {
		fetchMeals({
			url: "https://react-test-7bc77-default-rtdb.firebaseio.com/meals.json", method: "GET"
		  }, transformMeals);
		  
	}, [fetchMeals]);
	//console.log("error", error)
  return (
<React.Fragment>
	{cartContext.showCart && <Cart/> }
    <Header/>
	<main>
		<MealsSummary/>
		<AvailableMeals mealItems={availableMeals} error={error} isLoading={isLoading}/>
	</main>
</React.Fragment>
  );
}

export default App;
