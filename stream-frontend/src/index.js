import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import {Route, Switch} from 'react-router'
import App from './App'
import Login from './containers/Login';
import Register from './containers/Register';
import Stream from './stream.js';
import PrivateRoute from './containers/PrivateRoute';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.min.css';
import configureStore from './store'
const history = createHistory()
const store = configureStore(history)
ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/register/" component={Register} />
        <Route exact path="/login/" component={Login} />
        <Route path="/stream/" component={Stream} />
        <PrivateRoute path="/" component={App}/>
      </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
