import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/pages/menu/Menu';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/menu">
      <Menu />
    </Route>
  </Switch>
);

function App() {
  return <Routes />;
}

export default App;
