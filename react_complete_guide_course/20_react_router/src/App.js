
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

import MainHeader from "./components/MainHeader";

import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <MainHeader></MainHeader>
      <main>
        <Switch>
      <Route path="/" exact>
        <Redirect to="/welcome"></Redirect>
      </Route>
      <Route path="/welcome">
        <Welcome></Welcome>
      </Route>
      <Route path="/products" exact={true}>
        <Products></Products>
      </Route>
      <Route path="/products/:productId">
        <ProductDetail></ProductDetail>
      </Route>
      </Switch>
      </main>
      
    </div>
  );
}

export default App;
