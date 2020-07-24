import React from 'react';
import Navbar from './components/Navbar';
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/screen/Home';
import Signin from './components/screen/SignIn';
import Profile from './components/screen/Profile';
import Signup from './components/screen/Signup';
import CreatePost from './components/screen/CreatePost';

function App() {
  return (
    <BrowserRouter>
     <Navbar /> 
     <Route exact path="/" >
       <Home />
     </Route>
     <Route path="/signin" >
       <Signin />
     </Route>
     <Route path="/signup" >
       <Signup />
     </Route>
     <Route path="/profile" >
       <Profile />
     </Route>
     <Route path="/create" >
       <CreatePost />
     </Route>

    </BrowserRouter>
  
  );
}

export default App;
