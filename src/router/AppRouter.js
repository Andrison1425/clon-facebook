import React from 'react' 
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from '../components/vistas/Login';
import Inicio from '../components/vistas/Inicio';

const AppRouter=()=>{
    return (
        <Router>
            <Switch>
                <Route exact path="/auth" component={Login} />
                <Route exact path="/" component={Inicio} />
            </Switch>
        </Router>
    )
}

export default AppRouter;