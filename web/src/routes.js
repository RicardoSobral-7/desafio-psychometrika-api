import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home"
import Signup from "./pages/Signup";
import Questoes from "./pages/Questoes";
import Questao2 from "./pages/Questao2";
import Questao3 from "./pages/Questao3";
import Questao4 from "./pages/Questao4";
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
            <PrivateRoute path="/prova/questoes" component={Questoes}/>
            <PrivateRoute path="/prova/questao2" component={Questao2}/>
            <PrivateRoute path="/prova/questao3" component={Questao3}/>
            <PrivateRoute path="/prova/questao4" component={Questao4}/>
            <PrivateRoute path="/prova/gabarito" component={Gabarito}/>
            <Route path="/ranking" component={Ranking} />
            <Route path="/evidence/:id" component={Evidence} />
        </Switch>
    </BrowserRouter>
)

export default Routes;