
import { Route } from "react-router-dom";


const Welcome = (props) => {
    return <div><h1>Welcome</h1>
        <Route path="/welcome/new-user"><par>new user</par></Route>
    </div>
};


export default Welcome;