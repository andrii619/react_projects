
import Input from "../UI/Input/Input";
import classes from "./MealItemForm.module.css"


function MealItemForm(props) {
	return <div className={classes.form}>
		<Input labelText="Amount" type="number"/>
		<button type="button" min="1" max="100" step="1">+Add</button>
		</div>
};


export default MealItemForm;