import React from "react";
import ComponentC from "./component_c";
import Context from "./context";

class ComponentB extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div>
        <div>Component B {this.context}</div>
        <ComponentC />
      </div>
    );
  }
}

export default ComponentB;
