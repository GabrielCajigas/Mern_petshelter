import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
    Link
  } from 'react-router-dom';


class EditPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {
        name: "",
        type: "",
        description: "",
        skill1:"",
        skill2:"",
        skill3:"",
        likes:0
      }, 
      errors: {
        name: "",
        type: "",
        description: ""
      },
      err: ""
    }
  }

  componentDidMount() {
    // console.log(localStorage.getItem("likes"));
    let _id = this.props.match.params._id;
    axios.get(`http://localhost:8000/api/pet/${_id}`)
      .then(res => {
        // console.log(res);
          this.setState({pet: res.data});
        
      })
      .catch(err => console.log(err));
  }

  editPet = e => {
    e.preventDefault();
    let _id = this.props.match.params._id;
    axios.put(`http://localhost:8000/api/pet/${_id}/edit`, this.state.pet)
      .then(res => {
        console.log(res);
        if(res.data.errors) {
            this.setState({errors: res.data.errors});
        } 
        else if (res.data.errmsg){
            this.setState({err: res.data.errmsg});
          }
          else {
            this.props.history.push(`/pet/${_id}`);
        }
      })
      .catch(err => console.log(err));
  }

  changeName = e => {
    this.setState({pet: {...this.state.pet, name:e.target.value}});
  }

  changeType = e => {
    this.setState({pet: {...this.state.pet, type:e.target.value}});
  }
  changeDescription = e => {
    this.setState({pet: {...this.state.pet, description:e.target.value}});
  }
  changeSkill1 = e => {
    this.setState({pet: {...this.state.pet, skill1:e.target.value}});
  }
  changeSkill2 = e => {
    this.setState({pet: {...this.state.pet, skill2:e.target.value}});
  }
  changeSkill3 = e => {
    this.setState({pet: {...this.state.pet, skill3:e.target.value}});
  }

  render() {
    return (
      <>
      
        <h1>Edit this pet</h1>
        <form  onSubmit={this.editPet}>
          Name:
          <input 
            className="form-control"
            type="text" 
            onChange={this.changeName}
            value = {this.state.pet.name}
          /> 
              {
          this.state.errors.name ?
          <span className="text-danger">{this.state.errors.name.message}</span> :
          ""
        }
          {
          this.state.err !== "" ?
          <span className="text-danger">{this.state.err}</span> :
          ""
        }
          <br/>
          Type:
          <input 
            className="form-control"
            type="text" 
            onChange={this.changeType} 
            value = {this.state.pet.type} 
          />
              {
          this.state.errors.type ?
          <span className="text-danger">{this.state.errors.type.message}</span> :
          ""
        }
          <br/>
          Description:
          <input 
            className="form-control"
            type="text" 
            onChange = {this.changeDescription} 
            value = {this.state.pet.description} 
          />
              {
          this.state.errors.description ?
          <span className="text-danger">{this.state.errors.description.message}</span> :
          ""
        }
          <br/>


          <ul className="nobullet">
            <li>Skills 1:
              <input 
              className="form-control"
              type="text" 
              onChange={this.changeSkill1} 
              value = {this.state.pet.skill1}  
            /> 
            </li>
            <br/>

            <li>Skills 2:
              <input 
              className="form-control"
              type="text" 
              onChange={this.changeSkill2} 
              value = {this.state.pet.skill2}  
            /> 
            </li>
            <br/>

            <li>Skills 3:
              <input 
              className="form-control"
              type="text" 
              onChange={this.changeSkill3} 
              value = {this.state.pet.skill3} 
            /> 
            </li>
            <br/>
            
          </ul>
           <div ><input className = "btn btn-success p-2" type="submit" value="Edit" /> <Link className = " btn btn-success m-2" to={`/`}>Cancel</Link></div>
        </form>
      </>
    );
  }
}

export default EditPet;
