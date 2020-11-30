import "./App.css";
import OrigImg from "./Components/OrigImg/OrigImg";
import ResizeImg from "./Components/ResizeImg/ResizeImg";

function App() {
  
  return (
    <div className="app">
      <header className="app__header">
        <h1>Image Resizer</h1>
      </header>
      <OrigImg />
      <ResizeImg />
    </div>
  );
}

export default App;
