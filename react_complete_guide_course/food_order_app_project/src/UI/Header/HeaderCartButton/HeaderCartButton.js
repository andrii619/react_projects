import React, {useContext} from 'react';

import CartIcon from './CartIcon';
import CartContext from '../../../store/cart-context';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
	const cartContext = useContext(CartContext);
  return (
	  <React.Fragment>
		  
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={cartContext.onToggleCart}
      disabled={props.disabled}>

		<div className={classes['icon']}>	<CartIcon /></div>
		{/*props.children*/}
    Your Cart

		<div className={classes.badge}>{cartContext.numItems}</div>
    </button>

	</React.Fragment>
  );
};

export default HeaderCartButton;
