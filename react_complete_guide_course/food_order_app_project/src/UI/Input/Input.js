
import React from "react";
import classes from "./Input.module.css"

function Input(props) {
	return <div className={classes.input}>
		<label>{props.labelText}</label>
		<input type={props.type}></input>
		</div>
};


export default Input;