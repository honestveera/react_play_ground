import React from 'react';


const JsxExample = (props) => {
   const child = React.createElement('p', null, props.native+' irunthu');
   return React.createElement('div', null, child)
}

export default JsxExample;
