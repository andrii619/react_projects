import classes from './CartItem.module.css';
import {useContext} from "react";
import CartContext from '../store/cart-context';

const CartItem = (props) => {
	//console.log("price: ", props.price, typeof props.price);
  //console.log("name: ", props.name, typeof props.name);
  //console.log("amount: ", props.amount, typeof props.amount);

  const cartContext = useContext(CartContext);
  const addItemHandler = ()=>
  {
    cartContext.onAddToCart(props.id, 1);
  }
  const removeItemHandler = () => {
    cartContext.onAddToCart(props.id, -1);
  }

	const price = props.price.toFixed(2);
  //const price = `${props.price.toFixed(2)}`;
  return (
    <li key={props.id} className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
