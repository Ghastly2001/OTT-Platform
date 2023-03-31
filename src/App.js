import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./Components/LoginScreen";
import SpecialMode from "./Components/SpecialMode";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import ProfileScreen from "./Components/ProfileScreen";

function App() {
  const user = auth.currentUser;
  // const dispatch = useDispatch();
  
 

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       //Logged in
  //       dispatch(
  //         login({
  //           uid: userAuth.uid,
  //           email: userAuth.email,
  //         })
  //       );
  //       console.log(userAuth);
  //     } else {
  //       // loggedOut
  //       dispatch(logout);
  //     }
  //   });
  //   return unsubscribe;
  // }, []);

  return (
    <div className="app">
      <Router>
          <Switch>
          <Route exact path="/">
          <Home />
            </Route>
            <Route path="/login">
              <LoginScreen />
            </Route>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route path="/special">
              <SpecialMode />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
