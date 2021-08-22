
import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css"
import {useState} from "react";

function MealItemForm(props) {
	const [stateValue, setStateValue] = useState("1");
	const valueChangeHandler = (event)=> {
		setStateValue(Number(event.target.value));
	}
	const submitHandler = (event)=> {
		event.preventDefault();
		props.onSubmit(stateValue);
	}
	const input = {id: props.id,type: "number",min:"1",max:"10",
			 step:"1", value: stateValue, onChange: valueChangeHandler};

	return <form className={classes.form} onSubmit={submitHandler}>
		<Input labelText="Amount" input={input}/>
		<button type="submit">+Add</button>
		</form>
};


export default MealItemForm;