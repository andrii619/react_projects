
import React from "react";
import classes from "./Input.module.css"
//import {useState} from "react"

function Input(props) {
	const input = props.input;

	return <div className={classes.input}>
		<label htmlFor={input.id}>{props.labelText}</label>
		<input id={input.id} {...input} value={input.value} onChange={input.onChange}></input>
		</div>
};


export default Input;