import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';


class OnePet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {},
      errors: {},
      liked: false
    }
  }

  componentDidMount() {
    // console.log(localStorage.getItem("likes"));
    let _id = this.props.match.params._id;
    axios.get(`http://localhost:8000/api/pet/${_id}`)
      .then(res => {
        
          this.setState({pet: res.data});
        
      })
      .catch(err => console.log(err));
  }

 
  Increase = () => {
    
      let _id = this.props.match.params._id;
      console.log(this.state.pet.likes);
      axios.put(`http://localhost:8000/api/pet/${_id}` , {likes:this.state.pet.likes + 1 })
        .then(res => {
          // console.log(res);
          this.setState({pet: {...this.state.pet, likes: this.state.pet.likes + 1 } , liked:true});
          localStorage.setItem("likes",this.state.pet._id);

          // this.props.history.push("/all");
        })
        .catch(err => console.log(err));
  }


  deletePet(id){

    let _id = id
    // console.log(_id);
    axios.delete(`http://localhost:8000/api/pet/${_id}` , this.state.pet)
      .then(res => {
          // console.log(res);
          this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }

  render() {
    return (

      <>
      <Link className="m-2" to={`/`}>Home</Link>
        <fieldset className="scheduler-border" >
        <legend className="scheduler-border">Details about: {this.state.pet.name}</legend>
        <p><strong>Pet Type:</strong> {this.state.pet.type}</p>
        <p><strong>Pet Description:</strong> {this.state.pet.description}</p>
        <p><strong>Pet Skills:</strong> <br/> {this.state.pet.skill1} <br/>{this.state.pet.skill2} <br/>{this.state.pet.skill3}
        </p>
        <p><strong>Pet Likes:</strong> {this.state.pet.likes}</p>
      
      </fieldset>
      { !this.state.liked? 
      <button className="btn btn-success "
      onClick={this.Increase}
      >Like
      </button> :

      <button className="btn btn-success " 
      disabled
      >Like
      </button>
      }
      <button className="btn btn-danger m-2" onClick={() => this.deletePet(this.state.pet._id) } >Adopt this pet!</button>
       {/* <span className="m-2">  {this.state.pet.likes} {this.state.pet.likes === 1 ? "Like" : "Likes"} </span> */}
      </>
    );
  }
  
}

export default OnePet;



