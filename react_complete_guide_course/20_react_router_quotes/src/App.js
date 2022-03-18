

//import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

import { Route, Switch, Redirect } from "react-router-dom";



import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";


function App() {
  return (
    <div>
      <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes"/>
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes/>
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail/>
        </Route>
        <Route path="/add_quote" exact>
          <NewQuote/>
        </Route>
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
