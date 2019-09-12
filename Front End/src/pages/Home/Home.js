import React, { Component } from "react";
import {Button} from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css';
import './Home.css'




class Home extends Component {
  render() {
    return (
      <div className="home">
      <h1 className= "header-main" >The Ushe</h1>
      <h2 className= "header-home"> What's your Ushe?</h2>
      <h3 className= "header-second" > Share your favorite food and drink orders with the world. </h3>
      <a href="/login"><Button className="btn btn-outline-primary">Sign in</Button></a>
      <a href="/register"><Button className="btn btn-outline-primary">Sign up</Button></a>
      </div>
    );
  } 
}
export default Home;