import classes from './CartButton.module.css';

import {useSelector, useDispatch} from "react-redux";

//import {cartActions} from "../../store/cart";
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const cartTotalItems = useSelector(state => {
    return state.cartReducer.cartTotalItems;
  });
  const clickHandler = (event) => {
    dispatch(uiActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalItems}</span>
    </button>
  );
};

export default CartButton;
