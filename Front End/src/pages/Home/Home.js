import React, { Component } from "react";
import "./Home.css";



class Home extends Component {
  componentDidMount() {
    document.body.classList.add("homebg");
  }
  render() {
    return (
      <div>
      <h1 className= "header-main" >The Ushe</h1>
      <h2 className= "header-home"> What's your Ushe?</h2>
      <h3 className= "header-second" > Share your favorite food and drink orders with the world. </h3>
      <a href="/login"><button type="button" className="btn btn-outline-primary">Login</button></a>
      <a href="/register"><button type="button" className="btn btn-outline-primary">Register</button></a>
      </div>
    );
  }
}
export default Home;