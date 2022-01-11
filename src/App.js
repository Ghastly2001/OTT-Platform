import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from './Components/LoginScreen';
import SpecialMode from './Components/SpecialMode';

function App() {
  return (
    <div className='app'>
 <Router>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <LoginScreen />
      </Route>
      <Route path="/special">
        <SpecialMode />
      </Route>
      </ Switch >
 </Router>
   </div>
    
  );
}

export default App;