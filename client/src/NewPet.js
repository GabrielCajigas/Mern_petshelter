import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';

class NewPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {}, 
      errors: {
        name: "",
        type: "",
        description: ""
      },
      err: ""
    }
  }

  addPet = e => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/pet", this.state.pet)
      .then(res => {
        console.log(res);
        if(res.data.errors ) {
          this.setState({errors: res.data.errors});} 
          else if (res.data.errmsg){
            this.setState({err: res.data.errmsg});
          }
          else {
          this.props.history.push("/");
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
      
        <h1>Know of a pet needing a home?</h1>
        <form  onSubmit={this.addPet}>
          Name:
          <input 
            className="form-control"
            type="text" 
            placeholder="Name" 
            onChange={this.changeName}
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
            type="Type" 
            placeholder="Type"
            onChange={this.changeType}  
          ></input>
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
            placeholder="Description" 
            onChange={this.changeDescription}  
          ></input>
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
              placeholder="Skills" 
              onChange={this.changeSkill1}  
            ></input>
            </li>
            <br/>
            <li>Skills 2:
              <input 
              className="form-control"
              type="text" 
              placeholder="Skills" 
              onChange={this.changeSkill2}  
            ></input>
            </li>
            <br/>
            <li >Skills 3:
              <input 
              className="form-control"
              type="text" 
              placeholder="Skills" 
              onChange={this.changeSkill3}  
            ></input>
            </li>
            <br/>
          </ul>
           <div ><input className = "btn btn-success" type="submit" value="Create" /> <Link className = " btn btn-success m-2" to={`/`}>Cancel</Link></div>
        </form>
      </>
    );
  }
}

export default NewPet;
