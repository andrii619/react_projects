import classes from './Header.module.css';

import {useSelector, useDispatch} from "react-redux";
import {authActions} from "../store/auth";


const Header = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => {
    return state.authReducer.authenticated;
  });

  const logoutHangler = (event) => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {loggedIn && 
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHangler}>Logout</button>
            </li>
          </ul>
        </nav>
      }
    </header>
  );
};

export default Header;
