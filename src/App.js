import "./App.css";
import OrigImg from "./Components/OrigImg/OrigImg";
import ResizeImg from "./Components/ResizeImg/ResizeImg";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h3>Image Resizer</h3>
      </header>
      {/* <OrigImg /> */}
      <ResizeImg />
    </div>
  );
}

export default App;
