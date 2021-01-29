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

  render() {
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
