import {useEffect} from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import Checkout from './Checkout';
import Footer from './Footer';
import Navlink from './Navlink';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';



function App() {

  const [{loggedinusre}, dispatch] = useStateValue();
  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((userauth) => {
      if(userauth){
        dispatch({
          type: 'SET_LOGIN',
          user: userauth
        })
      }else { 
        dispatch({
          type: 'SET_LOGIN',
          user: null
        })
      }
    })
    return () => {
      unsubsribe();
    }
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>   
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Navlink/>
            <Home/>
            <Footer/>
          </Route>
        </Switch>

        
      </div>
    </Router>
  );
}

export default App;
