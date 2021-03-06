import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super()
    this.stat = {
      currentUser: null
    }
  }

componentDidMount() {
  auth.onAuthStateChanged(user => {
    this.setState({currentUser: user})
  })
}
  render(){
 
  return (
    <div >
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signIn' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}
}

export default App;
