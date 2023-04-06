import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import ObjectUseState from './components/Immutable_State/ObjectUseState';
import ArrayUseState from './components/Immutable_State/ArrayUseState';
import Parent from './components/Parent_Child/Parent';
import ChildOne from './components/Optimization/ChildOne';
import ParentOne from './components/Optimization/ParentOne';

function App() {
  return (
    <div className="App">
      <ParentOne>
        <ChildOne />
      </ParentOne>
      {/* <Parent /> */}
      {/* <ArrayUseState /> */}
      {/* <ObjectUseState /> */}
      {/* <UseReducer /> */}
      {/* <UseState /> */}
    </div>
  );
}

export default App;
