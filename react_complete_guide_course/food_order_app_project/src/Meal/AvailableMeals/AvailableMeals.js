
import MealItem from "../MealItem/MealItem"
import Card from "../../UI/Card/Card";
import classes from "./AvailableMeals.module.css"


function buildAvailableMeals(mealItems)
{
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
			<ul>
				{
					/*props.mealItems.map((mealItem) => {
						return <MealItem key={mealItem.id} id={mealItem.id} name={mealItem.name} price={mealItem.price} description={mealItem.description}/>
					})*/
					meals
				}
			</ul>
	</Card></section>)
}


export default AvailableMeals;