import React, { Component } from 'react';
import './App.css';
import AllPets from './AllPets';
import NewPet from './NewPet';
import OnePet from './OnePet';
import EditPet from './EditPet';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <h1 className="display-6"> Pet Shelter</h1> 
        <div className="container-fluid text-center">
        <Route exact path="/" component={AllPets} />
        <Route path="/new" component={NewPet} />
        <Route exact path="/pet/:_id" component={OnePet} /> 
        <Route path="/pet/:_id/edit" component={EditPet} /> 
        </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
