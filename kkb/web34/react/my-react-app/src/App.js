import './App.css';
import ClassComponent from './pages/1-component/ClassComponent';
import FunctionComponent from './pages/1-component/FunctionComponent';
import LifeCycle from './pages/2-lifecycle/LifeCycle';

function App() {
  return (
    <div className="App">
      <ClassComponent/>
      <FunctionComponent/>
      <LifeCycle/>
    </div>
  );
}

export default App;
