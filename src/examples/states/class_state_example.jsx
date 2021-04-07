import React from 'react';

class Counter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment() {
    // Current state Example
    // this.setState({
    //   count: this.state.count + 1
    // }, () => console.log(this.state.count));

    this.setState((prevState) => ({
      count: prevState.count + 1
    }), () => console.log(this.state.count))
  }

  reset() {
    this.setState({
      count: 0
    }, () => {
      console.log(this.state.count)
    });
  }

  incrementThree() {
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return ( <
      div >
      <
      p > Counter: {
        this.state.count
      } < /p> <
      button onClick = {
        () => this.incrementThree()
      } > Count < /button> <
      button onClick = {
        () => this.reset()
      } > Reset < /button> < /
      div >
    )
  }

}

export default Counter;
