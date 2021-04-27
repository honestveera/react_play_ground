import React, {useContext} from "react";
import {ContextHook, ContextChannel} from "./context";

const ComponentC = () => {
  const name = useContext(ContextHook);
  const channel = useContext(ContextChannel); 

  return (
   <div> {name} - {channel} </div>
  );
};

export default ComponentC;
