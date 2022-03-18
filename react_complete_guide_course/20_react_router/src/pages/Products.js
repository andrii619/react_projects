


//import ProductDetail from "./ProductDetail";


//import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Products = (props) => {
    return <div>
        <h1>Prodcts</h1>
    <ul>
        <li>
            <Link to="/products/product1">Product 1</Link>
        </li>
        <li>
            <Link to="/products/product2">Product 2</Link>
        </li>
        <li>
            <Link to="/products/product3">Product 3</Link>
        </li>
    </ul>
    </div>
};


export default Products;