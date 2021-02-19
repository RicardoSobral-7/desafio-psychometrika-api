import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home"
import Signup from "./pages/Signup";
import Questoes from "./pages/Questoes";
import Gabarito from "./pages/Gabarito";
import Ranking from "./pages/Ranking";
import Evidence from "./pages/Evidence";




import { isAuthenticated } from "./services/auth"

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/prova/questao/:id" component={Questoes}/>
            <PrivateRoute path="/prova/gabarito" component={Gabarito}/>
            <Route path="/ranking" component={Ranking} />
            <Route path="/evidence/:id" component={Evidence} />
        </Switch>
    </BrowserRouter>
)

export default Routes;