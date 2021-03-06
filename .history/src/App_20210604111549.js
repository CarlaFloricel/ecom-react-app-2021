import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route } from 'react-router-dom'


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div >
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/hats' component={HatsPage}/>
      <HomePage/>
    </div>
  );
}

export default App;
