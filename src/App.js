import React from "react";
import { Component } from "react";
import Cards from "./Cards";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Mary",
          age: 99
        },
        {
          name: "Frank",
          age: 19
        }
      ]
    };
  }

  getUsers() {
    var listOfUsers = this.state.users.map(usr => (
      <li key={usr.name}>
        {usr.name},{usr.age}
      </li>
    ));
    return (
      <div>
        <ul>{listOfUsers}</ul>
      </div>
    );
  }

  addUser(name1, age1) {
    console.log(this.state.users);
    let newUsers = this.state.users;
    newUsers.push({ name: name1, age: age1 });
    this.setState({
      users: newUsers
    });
  }

  render() {
    return (
      <div>
        <h1>Contact Card</h1>
        <ul>{this.getUsers()}</ul>
        {
          <form>
            <label>Name</label>
            <input type="text" name="firstname" id="name" />
            <label>age</label>
            <input type="text" id="age" />
            <button
              type="button"
              onClick={event => {
                this.addUser(
                  document.getElementById("name").value,
                  document.getElementById("age").value
                );
              }}
            >
              {" "}
              Submit{" "}
            </button>
          </form>
        }
      </div>
    );
  }
}

export default App;
