import {Route, Switch, Redirect} from 'react-router-dom'
import {ROUTES, LINKS, ROUTES_RESOURCES} from '../../constants/NavConstants'

const Routes = () => (
    <Switch>
        <Route exact path="/" render={() => <Redirect to={LINKS.main} />} />
        {ROUTES.map((route, index) => (
            <Route key={index} path={route.path} component={route.component} />
        ))}
        {ROUTES_RESOURCES.map((route, index) => (
            <Route key={index} path={route.path} component={route.component} />
        ))}
    </Switch>
)

export default Routes
