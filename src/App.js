import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  // state is Object and inner Data and data is Change.
  
  plus = () => {
    console.log("plus");
  };  // plus Function

  minus = () => {
    console.log("minus");
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
