import logo from './assets/images/logo.svg';
import './assets/stylesheets/App.css';
import FunComponent from './examples/components/functional_component';
import ClsComponent from './examples/components/class_component.js';
import JsExa from './examples/jsx/js_example.js';
import JsxExa from './examples/jsx/jsx_example';
import Human from './examples/props/props_example.js';
import ClsState from './examples/states/class_state_example'
import FunctionClk from './examples/events/functional_click';
import ClassClk from './examples/events/class_click';
import BindEvent from './examples/bind_events/bind_event_handler.js';
import ParentChild from './examples/method_props/parent_component';
import ConditionalRender from './examples/conditional_render/con_render';
import ListRendering from './examples/list_rendering/list_render';

function App() {
  return (
    <div className="App">
      <header className=''>
        {/* Components Examples */}
        <FunComponent name='Honest' color='red'/>
        <ClsComponent name='Raj' color='blue'/>

        {/* JSX Emaples */}
        <JsExa name='Honest Rajs' action='What doing'/>
        <JsxExa native= "Thenila"/>
        <JsxExa native= "Maduraila"/>

        {/* Props with and without child elements */}
        <Human height='7 Feet' weight='85 Kgs'/>
        <Human height='8 Feet' weight='100 Kgs'>
          <li>Honest</li>
          <li>Ravanan</li>
        </Human>
        <Human height='5 Feet' weight='50 Kgs'>
          <button>Lets Do it</button>
        </Human>

        {/* State Examples */}
        <ClsState/>

        {/* Event Handling */}
        <FunctionClk/><br/>
        <ClassClk/><br/>

        {/* Binding Event Handler Formats */}
        <BindEvent/><br/>
        {/*Methods and Props*/}
        <ParentChild/>
        <ConditionalRender />
        <ListRendering />
      </header>
    </div>
  );
}

export default App;
