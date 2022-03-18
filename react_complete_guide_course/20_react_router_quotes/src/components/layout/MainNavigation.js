


import classes from "./MainNavigation.module.css";

import { NavLink } from "react-router-dom";

//import Layout from "./Layout";


const MainNavigation = (props) => {
    return <header className={classes.header}>
        {/*<Layout className={classes.logo}/>*/}
        <div className={classes.logo}>Great Quotes</div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to="/quotes">All Quotes</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/add_quote">Add a Quote</NavLink>
                </li>
            </ul>
        </nav>
    </header>
};



export default MainNavigation;













