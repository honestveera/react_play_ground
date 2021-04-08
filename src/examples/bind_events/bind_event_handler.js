import React from 'react';

class BindEvents extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello'
    };
    // this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent()
  {
    let msg = this.state.message;
    
    if(msg == 'Hello'){
      this.setState({
        message: "Good Bye"
      })
    }
    else{
      this.setState({
        message: "Hello"
      })
    }
  }


  render() {
    return (
      <div>
       <button onClick={this.clickEvent.bind(this)}> {this.state.message} </button>
       {/* <button onClick={()=>this.clickEvent()}> {this.state.message} </button> */}
       {/* <button onClick={this.clickEvent}> {this.state.message} </button> */}
      </div>
    );
  }

}
export default BindEvents;
