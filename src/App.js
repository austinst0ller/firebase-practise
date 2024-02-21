import React from 'react';
import './App.css';
import { auth } from './firebase/init';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({})
  const [loading, setLoading] = React.useState(true)

  // if you only want this to run on mount, you HAVE to pass
  // in an empty arr.
  // this allows the user to be auto logged in if they refresh
  // the page, it provides a horrible user experience if they have
  // to log back in whenever they refresh the page.
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false)
      console.log(user)
      if (user) {
        setUser(user)
      }
    })
  }, [])
  
  // to display the first character of the user's email:
  // user.email[0].toUppserCase();

  function register() {
    createUserWithEmailAndPassword(auth, 'email@email.com', 'test123')
      .then((user) => {
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function login() {
    signInWithEmailAndPassword(auth, 'email@email.com', 'test123')
      .then(({ user }) => {
        console.log(user)
        setUser(user)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  function logout() {
    signOut(auth)
    setUser({})
  }

  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {loading ? 'loading...' : user.email}
    </div>
  );
}

export default App;
