import './App.css';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/Home';
import Menu from './components/pages/menu/Menu';
import MenuDetails from './components/pages/menu/MenuDetails';
import Group from './components/pages/menu/Group';
import Dish from './components/pages/menu/Dish';
import Signin from './components/Signin';
import * as SpecialRoutes from './components/Routes';
const { AuthRoute, ProtectedRoute } = SpecialRoutes;
const Routes = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home}></ProtectedRoute>
    <Route exact path="/menu" component={Menu}></Route>
    <Route exact path="/menudetail" component={MenuDetails}></Route>
    <Route exact path="/menu/:menuId" component={MenuDetails}></Route>
    <Route exact path="/group/:groupId" component={Group}></Route>
    <Route exact path="/group/:groupId/dish/:dishId" component={Dish}></Route>
    <AuthRoute exact path="/signin" component={Signin}></AuthRoute>
  </Switch>
);

function App({ loadingState }) {
  const toReturn =
    loadingState === 'loading' ? (
      <div
        style={{
          backgroundColor: '#444',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontWeight: 800,
            width: 200,
            height: 200,
            borderRadius: 999,
            border: '1px solid white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <h1>LOADING...</h1>
        </div>
      </div>
    ) : (
      <Routes />
    );
  return toReturn;
}

const mapStateToProps = (state) => ({
  loadingState: state.ui.status,
});

export default connect(mapStateToProps)(App);
