import { Redirect, Route } from "react-router";

const PrivateRoute = ({component:Component,...rest})=>{
    const auth=false
    return (
        <Route {...rest} render={props => (
            auth?<Component {...props} />: <Redirect to="/login"/>
        )}
        />
    );
}

export default PrivateRoute