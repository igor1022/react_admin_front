import React, { Component } from 'react';
import axios from 'axios';
import {useState, useEffect, useRef} from 'react';
export default class EssayForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        value: 'Admin'
      };
  
      //this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
   /* handleChange(event) {
      this.setState({value: event.target.value});
    }*/
  
    async handleSubmit(event) {
      alert('Форма была отправлена: ' + this.state.value);
      event.preventDefault();
      const result = await axios.post('https://guarded-chamber-88701-7c7ee3d58107.herokuapp.com/login', {user: event.target.user.value, password: event.target.password.value});
      console.log('result: ', result.data);
      if (result.data === false) {
        this.props.setLoading(result.data);
      } 
    } 
  
    

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Заполните форму Admin:
          </label>
          <br/>
          <br/>
          <label>Login</label>
          <br/>
          <input name="user"/>
          <br/>
          <label>Password</label>
          <br/>
          <input name="password"/>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }