import React from "react";
import { Component } from "react";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          fname: "Mary",
          lname: "Poppins",
          age: 99
        },
        {
          fname: "Frank",
          lname: "Gallager",
          age: 19
        }
      ]
    };
  }

  render() {
    var listOfUsers = this.state.users.map(usr => (
      <li key={usr.fname}>
        {usr.fname},{usr.lname},{usr.age}
      </li>
    ));
    return (
      <div>
        <ul>{listOfUsers}</ul>
      </div>
    );
  }
}

export default Cards;
