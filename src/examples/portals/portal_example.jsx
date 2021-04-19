import React from 'react';
import ReactDOM from 'react-dom';

function PortalExample(){

  return ReactDOM.createPortal(<div>Portal Demo!!!!!!!!!!!!!</div>,  document.getElementById('example-root'))
}

export default PortalExample;
