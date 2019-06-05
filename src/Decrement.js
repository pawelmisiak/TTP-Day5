import React, { Component } from "react";
import "./Decrement.css";

class Decrement extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 10 };
  }

  decrementNumber() {
    if (this.state.value <= 0) {
      alert("you cannot go lower than ZERO!");
    } else {
      let val = this.state.value - 1;
      this.setState({
        value: val
      });
    }
  }
  IncrementNumber() {
    let val = this.state.value + 1;
    this.setState({
      value: val
    });
  }

  render() {
    return (
      <div className="decStyle">
        <button
          className="decButton"
          onClick={e => {
            this.IncrementNumber();
          }}
        >
          Increment
        </button>
        {this.state.value}
        <button
          className="decButton"
          onClick={e => {
            this.decrementNumber();
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default Decrement;
