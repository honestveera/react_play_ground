import logo from './assets/images/logo.svg';
import './assets/stylesheets/App.css';
import FunComponent from './examples/components/functional_component';
import ClsComponent from './examples/components/class_component.js';
import JsExa from './examples/jsx/js_example.js';
import JsxExa from './examples/jsx/jsx_example';

function App() {
  return (
    <div className="App">
      <header className=''>
        <FunComponent name='Honest' color='red'/>
        <ClsComponent name='Raj' color='blue'/>
        <JsExa name='Honest Rajs' action='What doing'/>
        <JsxExa native= "Thenila"/>
        <JsxExa native= "Maduraila"/>
      </header>
    </div>
  );
}

export default App;
