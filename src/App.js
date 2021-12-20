import logo from './logo.svg';
import './App.css';
import UseState from './example_1/components/UseState';
import Parent from './example_2/components/Parent';
import ParentOne from './Optimization/components/ParentOne';
import ParentOneOptimized from './Optimization/components/ParentOneOptimized';
import ChildOneOptimized from './Optimization/components/ChildOneOptimized';
import GrandParent from './Optimization/GrandParent';
import ParentTwo from './Optimization/components/ParentTwo';
import ParentThree from './Optimization/components/ParentThree';

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

      {/* <GrandParent/> */}

      {/* <ParentTwo/> */}
      
      <ParentThree/>
    </div>
  );
}

export default App;
