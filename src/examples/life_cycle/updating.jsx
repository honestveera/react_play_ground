import React, { Component } from 'react';

class Update extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    console.log(`Update constructor`);
  }

  static getDerivedStateFromProps(props, state){
    console.log(`Update getDerivedStateFromProps`);
    return null
  }

  componentDidMount(){
    console.log(`Update componentDidMount`);
  }

  onChangeButton = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  shouldComponentUpdate(){
    console.log(`Update shouldComponentUpdate`);
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log(`Update getSnapshotBeforeUpdate prevProps: ${prevProps} prevState: ${prevState}`);
    return true
  }

  componentDidUpdate(){
    console.log(`Update componentDidUpdate`);
  }

  render() {
    console.log(`Update Render`);
    return (
      <div>
      <input type='text' value={this.state.name} onChange={this.onChangeButton} />
      <button >Click Me</button>
      </div>
    );
  }

}

export default Update;
