import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import ObjectUseState from './components/Immutable_State/ObjectUseState';
import ArrayUseState from './components/Immutable_State/ArrayUseState';
import Parent from './components/Parent_Child/Parent';
import ChildOne from './components/Optimization/ChildOne';
import ParentOne from './components/Optimization/ParentOne';
import GrandParent from './components/Optimization/GrandParent';
import ParentTwo from './components/Optimization/ParentTwo';
import ParentThree from './components/Incorrect_Optimizations/ParentThree';
import ParentFour from './components/Incorrect_Optimizations/ParentFour';
import { ContextParent } from './components/Context/ContextParent';
import { ChildA } from './components/Context/ContextChildren';


function App() {
  return (
    <div className="App">
      <ContextParent>
        <ChildA />
      </ContextParent>
      {/* <ParentFour /> */}
      {/* <ParentThree/> */}
      {/* <ParentTwo /> */}
      {/* <GrandParent /> */}
      {/* <ParentOne value={'tester'}>
        <ChildOne />
      </ParentOne> */}
      {/* <Parent /> */}
      {/* <ArrayUseState /> */}
      {/* <ObjectUseState /> */}
      {/* <UseReducer /> */}
      {/* <UseState /> */}
    </div>
  );
}

export default App;
