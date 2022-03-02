
import MealItem from "../MealItem/MealItem"
import Card from "../../UI/Card/Card";
import classes from "./AvailableMeals.module.css"


function buildAvailableMeals(mealItems)
{
	if(!mealItems)
	{
		return null;
	}

	const mealsBuild = [];
	for(const item in mealItems)//iterate keys
	{
		mealsBuild.push(<MealItem key={item} id={item} name={mealItems[item].name} 
			price={mealItems[item].price} description={mealItems[item].description}/>);
	}
	return mealsBuild;
}


function AvailableMeals(props) {

	const meals = buildAvailableMeals(props.mealItems);

	return (
	<section className={classes.meals}>
		<Card>
			{!props.error && !props.isLoading && <ul>
				{
					/*props.mealItems.map((mealItem) => {
						return <MealItem key={mealItem.id} id={mealItem.id} name={mealItem.name} price={mealItem.price} description={mealItem.description}/>
					})*/
					meals ? meals : <p>No Meals To Display...</p>
				}
			</ul>}
			{props.isLoading && <p className={classes.MealsLoading}>Loading....</p>}
			{props.error && <p>Failed to load meals</p>}
	</Card></section>)
}


export default AvailableMeals;