import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';

const AppRouter = ({ isLoggedId }) => {
    return (
        <Router>
            <Switch>
                {isLoggedId ? (
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