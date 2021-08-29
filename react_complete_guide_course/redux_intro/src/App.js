import Counter from './components/Counter';

import {Fragment} from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

import {useSelector} from "react-redux";




function App() {
  const loggedIn = useSelector(state => {
    return state.authReducer.authenticated;
  });


  return (
    <Fragment>
      <Header />
      {loggedIn && <UserProfile />}
      {!loggedIn && <Auth />}
      {loggedIn && <Counter />}
    </Fragment>
  );
}

export default App;
