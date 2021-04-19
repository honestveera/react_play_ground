import React from "react";

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

export default HoverCounter;
