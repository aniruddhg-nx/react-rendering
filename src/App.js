import logo from './logo.svg';
import './App.css';
import UseState from './example_1/components/UseState';
import Parent from './example_2/components/Parent';
import ParentOne from './Optimization/components/ParentOne';
import ParentOneOptimized from './Optimization/components/ParentOneOptimized';
import ChildOneOptimized from './Optimization/components/ChildOneOptimized';
import GrandParent from './Optimization/GrandParent';

function App() {
  return (
    <div className="App">
      {/* Example_1 */}
      {/* <UseState/> */}

      {/* Example_2 */}
      {/* <Parent/> */}

      {/* Optimization */}
      {/* <ParentOne/> */}

      {/* <ParentOneOptimized>
        <ChildOneOptimized/>
      </ParentOneOptimized> */}

      <GrandParent/>
    </div>
  );
}

export default App;
