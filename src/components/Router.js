import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';

const AppRouter = (isLoggedIn) => {
    return (
        <Router>
            <Switch>
                {isLoggedIn.isLoggedIn ? (
                    <Route exact path="/">
                        <Home />
                    </Route>
                ) : (
                        <Route exact path="/">
                            <Auth />
                        </Route>
                    )}
                <Router />
            </Switch>
        </Router>
    );
}

export default AppRouter;