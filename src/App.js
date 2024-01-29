import React, { useEffect } from 'react';
//import store from './app/store';
import Header from './components/Header';
import Sidebar from "./components/Sidebar"
import "./App.css"
import Feed from './components/Feed';
import {login, logout, selectUser } from './features/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import Login from './components/Login';
import { auth } from './components/firebase';
import Widgets from './components/Widgets';


function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL
          })
        );
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className='App'>
       
      <Header/>
      {!user ? (
        <Login />
      ): (
        <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>

      ) }
      

   </div>
  );
}

export default App;
