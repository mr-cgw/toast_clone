import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  console.log('component', Component);
  console.log('path', path);
  console.log('loggedIn', loggedIn);
  console.log('exact', exact);
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={() => (loggedIn ? <Component /> : <Redirect to="/signin" />)}
  />
);

const mapDispatchToProps = (state) => ({
  loggedIn: state.session.id,
});

export const AuthRoute = connect(mapDispatchToProps)(Auth);
export const ProtectedRoute = connect(mapDispatchToProps)(Protected);
