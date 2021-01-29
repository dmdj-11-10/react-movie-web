import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  // state is Object and inner Data and data is Change.
  
  plus = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };  // plus Function
  
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  }; // minus Function

  componentDidMount() {
    console.log("component render");
  } // Mount Component | render > componentDidMount
  componentDidUpdate() {
    console.log("component update");
  } // Update Component | render > componentDidUpdate
  componentWillUnmount() {
    console.log("Goodbye!")
  } // kill Component

  render() {
    console.log("I'm render");
    return (
      <div>
        <h1>The Number is: {this.state.count}</h1>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
