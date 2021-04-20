import React from "react";
import { UserConsumer } from "./context";

const ComponentC = () => {
  return (
    <UserConsumer>
     {
       (name) => {
         return <div> ComponentC {name}</div>
       }
     }
    </UserConsumer>
  );
};

export default ComponentC;
