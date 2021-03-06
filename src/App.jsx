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
import FormHandleExa from './examples/form_handling/form_handling_exa';
import Mounting from './examples/life_cycle/mounting';
import Updating from './examples/life_cycle/updating';
import FragmentExample from './examples/fragments/fragment_example';
import FRParent from './examples/refs/fr_ref_parent';
import Portal from './examples/portals/portal_example';
import ClickCounter from './examples/higher_order_comp/click_counter';
import HoverCounter from './examples/higher_order_comp/hover_counter';
import Counter from './examples/render_props/counter';
import RenderClickCounter from './examples/render_props/render_click_counter';
import RenderHoverCounter from './examples/render_props/render_hover_counter';
import ComponentA from './examples/context/component_a';
import { UserProvider } from './examples/context/context';
import HttpExample from './examples/http/http_example';

import HookStateExample from './examples/hooks_example/usestate/use_state_example.jsx';
import HookCounterObj from "./examples/hooks_example/usestate/hook_counter_object";
import HookCounterArray from "./examples/hooks_example/usestate/hook_counter_array";
import HookEffectOne from "./examples/hooks_example/useeffect/hook_useeffect";
import HookMouseContainer from "./examples/hooks_example/useeffect/mouse_container";
import FetchOne from "./examples/hooks_example/fetch/fetch_one"
import FetchTwo from "./examples/hooks_example/fetch/fetch_two"
import ContextExample from './examples/hooks_example/usecontext/component_a';
import { ContextHook, ContextChannel } from './examples/hooks_example/usecontext/context';
import UseReducerOne from './examples/hooks_example/usereducer/UseReducerOne'
import UseReducerTwo from './examples/hooks_example/usereducer/useReducerTwo'
import FetchReducer from "./examples/hooks_example/fetch/fetch_three_reducer.jsx";
import UseCalllback from "./examples/hooks_example/usecallback/ParentComponent.jsx";
import UseMemo from "./examples/hooks_example/usememo/MemoExmaple.jsx";
import CustomHookOne from "./examples/hooks_example/customhook/CounterOne";
import CustomHookTwo from "./examples/hooks_example/customhook/CounterTwo";

function App() {
  return (
    <div className="App">
      <header className=''>
        {/* Components Examples
        <FunComponent name='Honest' color='red'/>
        <ClsComponent name='Raj' color='blue'/>
        */}

        {/* JSX Emaples
        <JsExa name='Honest Rajs' action='What doing'/>
        <JsxExa native= "Thenila"/>
        <JsxExa native= "Maduraila"/>
        */}

        {/* Props with and without child elements
        <Human height='7 Feet' weight='85 Kgs'/>
        <Human height='8 Feet' weight='100 Kgs'>
          <li>Honest</li>
          <li>Ravanan</li>
        </Human>
        <Human height='5 Feet' weight='50 Kgs'>
          <button>Lets Do it</button>
        </Human>
        */}

        {/* State Examples
        <ClsState/>
         */}

        {/* Event Handling
        <FunctionClk/><br/>
        <ClassClk/><br/>
        */}

        {/* Binding Event Handler Formats
        <BindEvent/><br/>
        */}

        {/*Methods and Props
        <ParentChild/>
        <ConditionalRender />
        <ListRendering />
        */}

        {/* Form Handling
        <FormHandleExa/>
        */}

        {/* Life cycle
          <Mounting/>
          <Updating/>
        */}

        {/* Fragment
        <FragmentExample/>
        */}

        {/* Ref Exmaple
        <FRParent/>
        */}

        {/* Portal
        <Portal />
        */}

        {/* HOC
        <ClickCounter name='Honestraj'/>
        <HoverCounter area='S.S.Puram' />
        */}

        {/* Render Props
        <Counter populate= {(count, incrementCount)=>(
            <RenderClickCounter count={count} incrementCount={incrementCount} />
          )}/>
        <Counter populate={(count, incrementCount)=>(
          <RenderHoverCounter count={count} incrementCount={incrementCount} />
        )}/>
        */}

        {/* Context API
        <UserProvider value = 'Honestraj Kandhasamy' >
          <ComponentA/>
        </UserProvider>
        */}

        {/* HTTP Get/Post
        <HttpExample/>
        */}

        {/* Hooks Example */}
        {/* UseState Example 
        <HookStateExample/>
        <HookCounterObj/>
        <HookCounterArray/>
        */}

        {/* UseEffect Example 
          <HookEffectOne/>
          <HookMouseContainer/>
        */}

        {/* useEffect Fetch Data
        <FetchOne/>
        <FetchTwo/> */}

         {/* useContext
         <ContextHook.Provider value ='Honestraj Kandhasamy'>
         <ContextChannel.Provider value={[1,2,3,4]}>
            <ContextExample/>
         </ContextChannel.Provider> 
         </ContextHook.Provider> 
         */}

         {/* UseReducer 
         <UseReducerOne/>
         <UseReducerTwo/>
         <FetchReducer/>
         */}

          {/* UseCallback 
            <UseCalllback/>
            <UseMemo/>
          */}

          {/* CustomHook */}
          <CustomHookOne/>
          <CustomHookTwo/>

      </header>
    </div>
  );
}

export default App;
