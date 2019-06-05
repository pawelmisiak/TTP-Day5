import React from "react";
import { Component } from "react";
import Cards from "./Cards";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  addUser(n, a) {
    this.child.current.addUser(n, a);
  }

  render() {
    return (
      <div className="App">
        <h1>Contact Card</h1>
        <form>
          <label className="label">Name</label>
          <input
            className="inputField"
            type="text"
            name="firstname"
            id="name"
          />
          <label className="label">age</label>
          <input className="inputField" type="text" id="age" />
          <button
            type="button"
            onClick={event => {
              this.addUser(
                document.getElementById("name").value,
                document.getElementById("age").value
              );
            }}
          >
            Submit
          </button>
        </form>
        <div className="cardList">
          <Cards ref={this.child} />
        </div>
      </div>
    );
  }
}

export default App;
