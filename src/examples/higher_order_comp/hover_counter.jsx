import React from "react";
import WithCounter from "./with_counter";

class HoverCounter extends React.Component {
  render() {
    return (
      <div>
        <p onMouseOver={this.props.incrementCount}>
          {this.props.area} Hover Me {this.props.count} times
        </p>
      </div>
    );
  }
}

export default WithCounter(HoverCounter, 100);
