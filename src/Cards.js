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
        Name: {usr.name}, age: {usr.age}
      </div>
    ));
    return (
      <div>
        <ul>{listOfUsers}</ul>
      </div>
    );
  }
}

export default Cards;
