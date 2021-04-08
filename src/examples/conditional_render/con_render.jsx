import React from 'react';

class ConditionalRender extends React.Component
{

  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }

  render(){
     //CASE1:
     // if(this.state.isLoggedIn == true){
     //  return <div> Welcome Honestraj </div>
     // }
     // else{
     //  return <div> Welcome Guest </div>
     // }

     //CASE2:
     // let message
     // if(this.state.isLoggedIn == true){
     //  message = <div> Welcome Honestraj </div>
     // }
     // else{
     //  message = <div> Welcome Guest </div>
     // }
     // return message;

     //CASE3: Ternary conditional Opertor
     // return this.state.isLoggedIn == true ? <div> Welcome Honestraj </div> :  <div> Welcome Guest </div>

     //CASE4: Short Circuit operator
     return this.state.isLoggedIn == false && <div> Welcome Honestraj </div>

   }


}

export default ConditionalRender;
