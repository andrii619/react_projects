import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Dick'
          price={6.0}
          description='This is a first product - amazing!'
        />
        <ProductItem
          title='Test2'
          price={7.0}
          description='dick!'
        />
        <ProductItem
          title='Test3'
          price={8.0}
          description='fuck!'
        />
        <ProductItem
          title='Test4'
          price={9.0}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
