import React from 'react';

let items = ['Honest', 'Thilip', 'Veera', 'KKKKK']

const Table = (props) => (

  <>
   <table>
    {items.map((item) =>
      <>
      <tr> <td>{item}</td> <td>{props.name}</td> <td>{props.model}</td></tr>
      </>
     )}
   </table>
  </>
);

export default Table;
