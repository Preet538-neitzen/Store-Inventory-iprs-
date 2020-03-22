import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from './NavBar/NavBar';
import Login from './Login/Login';
import Register from './Register/Register'
import Home from './Home/Home';
import Inventory from './Inventory/Products'
import Employee from './EmployeeNameDisplay/Employee'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/login'>
          <NavBar />
          <Login />
        </PrivateRoute>
        <Route exact path='/register'>
          <NavBar />
          <Register/>
        </Route>
        <Route exact path='/Inventory'>
          <NavBar />
          <Inventory />
        </Route>
        <Route exact path='/Employee'>
          <NavBar />
          <Employee />
        </Route>
        <PrivateRoute path='/'>
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

const PrivateRoute = ({ children, path, ...rest }) => {
  const tokenExists = !!localStorage.getItem('token');
  if (path === '/') {
    return (
      <Route
        path={path}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        render={({ location }) =>
          tokenExists ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
  if (path === '/login') {
    return (
      <Route
        path={path}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        render={({ location }) =>
          tokenExists ? (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          ) : (
            children
          )
        }
      />
    );
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element).isRequired,
  ]),
  path: PropTypes.string,
};

export default Routes;
