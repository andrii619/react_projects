import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';

const Cart = (props) => {

  const cartItems = useSelector(state =>
    {
      return state.cartReducer.cartItems;
    })

    //const cartTotal = useSelector(state => {
    //  return state.cartReducer.totalPrice;
    //});
  
  const cart = [];

  for(const item in cartItems)
  {
    console.log("cart item ", item, cartItems[item]);
    const cartItem = cartItems[item];
    const itemTotal = cartItem.price * cartItem.amount;//(cartItem.amount*cartItem.price).toFixed(2);
    cart.push(<CartItem key={item} item={{ title: item, quantity: cartItem.amount, total: itemTotal, price: cartItem.price }}></CartItem>);
  }

    
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart}
      </ul>
    </Card>
  );
};

export default Cart;
