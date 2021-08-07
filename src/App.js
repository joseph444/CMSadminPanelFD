import { Route, Switch } from "react-router";
import PrivateRoute from "./components/PrivateRoute";
import * as constants from "./utils/constants"
function App() {
  return(
    <>
      <div>
        <Switch>
          {constants.ADMIN_PANEL_PATHS.map((path,index)=>{
            if(path.guest===true){
              return <Route component={path.component} key={index} exact path={path.path}/>
            }else{
              return <PrivateRoute component={path.component} key={index} exact path={path.path} />
            }
          })}
        </Switch>
      </div>
    </>
  );
}

export default App;
