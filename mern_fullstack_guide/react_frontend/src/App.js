import React from "react";

// react router imports
import { Route, Switch, Redirect } from "react-router-dom";

// our pages imports
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

import Layout from "./shared/components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/users" />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="*">
          <h2>Page does not exist</h2>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
