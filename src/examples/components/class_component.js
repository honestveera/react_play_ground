import React from 'react';

class Welcome extends React.Component
{
  render(){
    return <p>Class Component Properties: {this.props.name} {this.props.color}</p>;
  }
}

export default Welcome;
