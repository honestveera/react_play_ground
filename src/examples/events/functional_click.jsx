const clickEvent = () => { console.log("Function Clicked Me") };

const Click = () => (
  <div>
   <button onClick={clickEvent}> Function Click Me </button>
  </div>
);

export default Click;
