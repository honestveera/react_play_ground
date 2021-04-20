import React from "react";
import Axios from "axios";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

class FormExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  onSubmitHandler = () => {
    Axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <FormControl onSubmit={this.onSubmitHandler}>
        <TextField id="userId" name="userId" placeholder="UserId" />
        <TextField id="title" name="title" placeholder="Title" />
        <TextField id="body" name="body" placeholder="Body" />
        <Button> Submit </Button>
      </FormControl>
    );
  }
}

export default FormExample;
