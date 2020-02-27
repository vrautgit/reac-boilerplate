import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/configureStore';
import Home from './components/screens/home';
import Admin from './components/screens/admin';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
