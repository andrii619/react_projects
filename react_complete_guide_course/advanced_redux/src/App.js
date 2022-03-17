import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

import { Fragment } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {useSelector} from "react-redux";

let isInitial = true;

function App() {
const dispatch = useDispatch();


  const showCart = useSelector(state => {
    return state.uiReducer.showCart;
  });

  const notification = useSelector(state => {
    return state.uiReducer.notification;
  });

  const cart = useSelector(state => {
    // get the whole cart object
    return state.cartReducer;
  });

  //const totalCartItems = useSelector(state => {
  //  return state.cartReducer.cartTotalItems;
  //})

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if(isInitial)
    {
      isInitial = false;
      return;
    }

    if(cart.changed)
    {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} error={notification.error}/>}
    <Layout>
      {showCart && <Cart /> }
      <Products />
    </Layout>

    </Fragment>
  );
}

export default App;
