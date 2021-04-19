import React from "react";

class ClickCounter extends React.Component {
  render() {    
    return (
      <div>
        <button onClick={this.props.incrementCount}>
          {this.props.name} Click Me {this.props.count} times
        </button>
      </div>
    );
  }
}

export default ClickCounter;
