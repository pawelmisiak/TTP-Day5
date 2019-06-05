import React from "react";
import { Component } from "react";
import "./Cards.css";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Mary",
          age: 99
        },
        {
          name: "Bob",
          age: 102
        }
      ]
    };
  }

  addUser(n, a) {
    let newUsers = this.state.users;
    newUsers.push({ name: n, age: a });
    this.setState({
      users: newUsers
    });
    console.log(this.state.users);
  }

  render() {
    var listOfUsers = this.state.users.map(usr => (
      <div key={usr.name + usr.age} className="listItem">
        <h4>Name: {usr.name}</h4>
        <h4> age: {usr.age}</h4>
      </div>
    ));
    return listOfUsers;
  }
}

export default Cards;
