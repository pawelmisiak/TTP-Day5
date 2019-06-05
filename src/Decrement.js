import React, { Component } from "react";

class Decrement extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 50 };
  }
  render() {
    return this.state.value;
  }
}

export default Decrement;
