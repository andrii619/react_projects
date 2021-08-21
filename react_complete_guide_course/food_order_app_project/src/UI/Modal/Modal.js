import classes from "./Modal.module.css"
import Card from "../Card/Card";
import React from "react";
import ReactDOM from "react-dom";


function Backdrop(props) {
	return <div className={classes.backdrop} onClick={props.onClose}></div>
};

function ModalOverlay(props)
{
	return (
	<div className={classes.modal}>{props.children}
{/* 		<button onClick={props.onClose}>Close</button>
		<button onClick={props.onOrder}>Order</button> */}
	</div>);
}

/* function ModalWrapper(props) {
	return <React.Fragment>
	{ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,
		 document.getElementById("backdrop-root"))}
	{ReactDOM.createPortal(<ModalOverlay onClose={props.onClose}/>,
		document.getElementById("overlay-root"))}
</React.Fragment>
} */

function Modal(props) {
	return <Card>
	{ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,
		 document.getElementById("backdrop-root"))}
	{ReactDOM.createPortal(<ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
		document.getElementById("overlay-root"))}
</Card>
/* 	return <ModalWrapper onClose={props.onClose}>
		{props.children}
		</ModalWrapper> */
}

export default Modal;