import React from "react";
import FrChild from "./fr_ref_child";

class FRParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <FrChild ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus InPut</button>
      </div>
    );
  }
}

export default FRParent;
