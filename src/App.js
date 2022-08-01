import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { auth } from "./firebase";
import { login, logout } from "./app/userSlice";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Login/Login";
import Widgets from "./components/Widgets/Widgets";

function App() {
  const { user } = useSelector((state) => state.user);
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
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="appBody">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
