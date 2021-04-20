import React from "react";
import Axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormExample from './form_exa';

class HttpExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          posts: response.data,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <>
      <FormExample/>
      <TableContainer component={Paper}>
     <Table className="" aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>ID</TableCell>
           <TableCell align="right">UserId</TableCell>
           <TableCell align="right">Title</TableCell>
           <TableCell align="right">Body</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {posts.map((row) => (
           <TableRow key={row.id}>
             <TableCell component="th" scope="row">
               {row.id}
             </TableCell>
             <TableCell align="right">{row.userId}</TableCell>
             <TableCell align="right">{row.title}</TableCell>
             <TableCell align="right">{row.body}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
   </>
    );
  }
}

export default HttpExample;
