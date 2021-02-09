import './App.css';
import { Switch, Route } from 'react-router-dom';
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
    <ProtectedRoute exact path="/menu" component={Menu}></ProtectedRoute>
    <ProtectedRoute
      exact
      path="/menudetail"
      component={MenuDetails}
    ></ProtectedRoute>
    <ProtectedRoute
      exact
      path="/menu/:menuId"
      component={MenuDetails}
    ></ProtectedRoute>
    <ProtectedRoute
      exact
      path="/group/:groupId"
      component={Group}
    ></ProtectedRoute>
    <ProtectedRoute
      exact
      path="/group/:groupId/dish/:dishId"
      component={Dish}
    ></ProtectedRoute>
    <AuthRoute exact path="/signin" component={Signin}></AuthRoute>
  </Switch>
);

function App() {
  return <Routes />;
}

export default App;
