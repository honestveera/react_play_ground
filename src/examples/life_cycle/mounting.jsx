import React, { PureComponent } from 'react';

class Mounting extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {};
    console.log(`Mounting constructor`);
  }

  static getDerivedStateFromProps(props, state){
    console.log(`Mounting getDerivedStateFromProps`);
    return null
  }

  componentDidMount(){
    console.log(`Mounting componentDidMount`);
  }

  render() {
    console.log(`Mounting Render`);
    return (
      <div>
      Magilchi
      </div>
    );
  }

}

export default Mounting;
