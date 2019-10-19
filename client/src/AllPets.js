import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';

class AllPets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8000/api/pet")
      .then(res => this.setState({pets: res.data}))
      .catch(err => console.log(err));
  }
   
 

  render() {
    return (
      <>
      <h1>These pets are looking for a home</h1>
        <h3> <Link to={`/new`}>Add a Pet to the Shelter</Link>  </h3>
        <table className=" table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
        {
          this.state.pets.map( pet => 
            <tbody key={pet._id}>
            <tr >
          
              <td>{pet.name}</td>
              <td>{pet.type}</td>
              <td> <Link className="m-2" to={`/pet/${pet._id}`}>Details</Link>  <Link className="m-2" to={`/pet/${pet._id}/edit`}>Edit</Link></td>
            </tr>
            </tbody>
     
          )
        }
        </table>
      </>
    );
  }
}
export default AllPets;
