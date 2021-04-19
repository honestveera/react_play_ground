import React from "react";

class FormHandl extends React.Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      username: "",
      mail: "",
      password: "",
      confirmpassword: "",
      platform: "java",
      about: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleMailChange = (event) => {
    this.setState({
      mail: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleConfirmPasswordChange = (event) => {
    this.setState({
      confirmpassword: event.target.value,
    });
  };

  handlePlatformChange = (event) => {
    this.setState({
      platform: event.target.value,
    });
  };

  handleAboutChange = (event) => {
    this.setState({
      about: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`Name: ${this.state.username} Mail: ${this.state.mail}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table style={{ marginLeft: 400, marginTop: 150 }}>
          <tr>
            <td>
              <label>Username</label>
            </td>
            <td>
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Mail</label>
            </td>
            <td>
              <input
                type="text"
                value={this.state.mail}
                onChange={this.handleMailChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Password</label>
            </td>
            <td>
              <input
                type="text"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Confirm Password</label>
            </td>
            <td>
              <input
                type="text"
                value={this.state.confirmpassword}
                onChange={this.handleConfirmPasswordChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Platform</label>
            </td>
            <td>
              <select onChange={this.handlePlatformChange}>
                <option value="ruby">Ruby</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>About</label>
            </td>
            <td>
              <textarea
                value={this.state.about}
                onChange={this.handleAboutChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Submit</label>
            </td>
            <td>
              <button>Submit</button>
            </td>
          </tr>
        </table>
      </form>
    );
  }
}

export default FormHandl;
