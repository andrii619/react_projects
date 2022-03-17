import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { cartActions } from '../../store/cart';
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description } = props;

  const onAddHandler = (event) => {
    dispatch(cartActions.addItemToCart({title,price}));
  }

  return (
    <li className={classes.item} key={title}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={onAddHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
