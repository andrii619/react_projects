
import MealItem from "../MealItem/MealItem"
import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css"

function AvailableMeals(props) {


	return (<Card className={classes.meals}>
			<ul>
				{
					props.mealItems.map((mealItem) => {
						return <MealItem key={mealItem.id} name={mealItem.name} price={mealItem.price} description={mealItem.description}/>
					})
				}
			</ul>


	</Card>)
}


export default AvailableMeals;