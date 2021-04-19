import React from "react";
import WithCounter from "./with_counter";

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

export default WithCounter(ClickCounter, 50);
