import React,{useEffect,createContext,useReducer,useContext} from 'react';
import Navbar from './components/Navbar';
import "./App.css";
import { BrowserRouter, Route , Switch , useHistory } from 'react-router-dom';
import Home from './components/screen/Home';
import Signin from './components/screen/SignIn';
import Profile from './components/screen/Profile';
import Signup from './components/screen/Signup';
import CreatePost from './components/screen/CreatePost';
import UserProfile from './components/screen/UserProfile';
import {reducer,initialState} from './reducers/userReducer';
import Allfollowpost from './components/screen/Allfollowpost'

export const UserContext = createContext()

const Routing = () =>{
  const history = useHistory()
  const{state,dispatch } = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user")) 
  if(user){
    dispatch({type:"USER", payload:user})
  }
  else{
    history.push('/signin')
  }
  
  },[])
  return(
    <Switch>
      <Route exact path="/" >
       <Home />
     </Route>
     <Route path="/signin" >
       <Signin />
     </Route>
     <Route path="/signup" >
       <Signup />
     </Route>
     <Route exact path="/profile" >
       <Profile />
     </Route>
     <Route path="/create" >
       <CreatePost />
     </Route>
      <Route path="/profile/:userid" >
       <UserProfile />
     </Route>
     <Route path="/allfollowpost" >
       <Allfollowpost />
     </Route>
    </Switch>
  )

}
function App() {
 const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
     <Navbar /> 
     <Routing />
     

    </BrowserRouter>
    </UserContext.Provider>
  
  );
}

export default App;
