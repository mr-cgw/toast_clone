import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/pages/menu/Menu';
import MenuDetails from './components/pages/menu/MenuDetails';
import Group from './components/pages/menu/Group';
import Dish from './components/pages/menu/Dish'
const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/menu">
      <Menu />
    </Route>
    <Route exact path="/menudetail">
      <MenuDetails />
    </Route>
    <Route exact path="/menu/:menuId">
      <MenuDetails />
    </Route>
    <Route exact path="/group/:groupId">
      <Group />
    </Route>
    <Route exact path="/group/:groupId/dish/:dishId">
      <Dish />
    </Route>
  </Switch>
);

function App() {
  return <Routes />;
}

export default App;
