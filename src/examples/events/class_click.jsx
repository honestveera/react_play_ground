import React, { Component } from 'react';

class ClassClick extends Component {

  clickEvent(){
    console.log('Class Clicked Me')
  }

  render() {
    return (
      <div>
        <button onClick={this.clickEvent}> Class Click Me </button>
      </div>
    );
  }

}

export default ClassClick;
