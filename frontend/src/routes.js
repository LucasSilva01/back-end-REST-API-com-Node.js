import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import listUsers from './pages/listUsers/index'
import listEvents from './pages/Events/index'
const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={Home}/>
            <Route path = "/products" component={listUsers}/>
            <Route path = "/events" component={listEvents}/>

        </Switch>
    </BrowserRouter>
)

export default Routes;