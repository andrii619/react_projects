
import Input from "../UI/Input/Input";
import classes from "./MealItemForm.module.css"
import {useState} from "react";

function MealItemForm(props) {
	const [stateValue, setStateValue] = useState("1");
	const valueChangeHandler = (event)=> {
		//;console.log(event.target.value);
		setStateValue(Number(event.target.value));
	}
	const clickHandler = ()=> {
		//console.log("additn to cart ", stateValue);
		props.onSubmit(stateValue);
	}


	return <div className={classes.form}>
		<Input labelText="Amount" type="number" min="1" step="1" onChange={valueChangeHandler} value={stateValue}/>
		<button type="button" onClick={clickHandler}>+Add</button>
		</div>
};


export default MealItemForm;