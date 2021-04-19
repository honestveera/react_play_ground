import React from "react";
import Table from './table.jsx';

class Fragment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1>Title</h1>
        <p>How Are You</p>
        <Table name='Sony' model='K3'/>
      </>
    );
  }
}

export default Fragment;
