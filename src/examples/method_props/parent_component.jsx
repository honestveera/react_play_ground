import React, { PureComponent } from 'react';
import ChildComponent from '../method_props/child_component.jsx';

class ParentComponent extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      parentName: 'Parent'
    };
    this.parentMethod = this.parentMethod.bind(this)
  }

  parentMethod(childName){
    alert(`Invoked Parent method ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greet={this.parentMethod}/>
      </div>
    );
  }

}

export default ParentComponent;
