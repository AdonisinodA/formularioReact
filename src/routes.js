import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Register } from "./pages/Register";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Registrar" component={Register} />
      </Switch>
     
    </BrowserRouter>
  );
};
export default Routes;
