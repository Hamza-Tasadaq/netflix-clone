import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import auth from './firebase/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, logOut, selectUser } from './features/user/userSlice'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Movies from './pages/Movies/Movies';
import Profile from './pages/Profile/Profile'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth)
        console.log("log In")
        // loggedin
        dispatch(logIn({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }
      else {
        // loggedOut
        console.log("log out")
        dispatch(logOut())
        // history.push("/")
      }
    })
    return () => (unSubscribe())
  }, [])
  return (

    <Router>
      <Switch>
        {user ?
          <>
            <Route exact path="/">
              <Movies />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </>
          :
          <header className="show-case">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signin">
              <Signin />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </header>
        }
      </Switch>
    </Router>
  );
}

export default App;
