import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/listUsers/index'

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={Home}/>
            <Route path = "/products" component={Search}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;