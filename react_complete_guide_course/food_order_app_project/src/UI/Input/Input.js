
import React from "react";
import classes from "./Input.module.css"
//import {useState} from "react"

function Input(props) {


	return <div className={classes.input}>
		<label>{props.labelText}</label>
		<input type={props.type} min={props.min} max={props.max} step={props.step} value={props.value} onChange={props.onChange}></input>
		</div>
};


export default Input;