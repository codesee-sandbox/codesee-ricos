import { RicosEditor } from "ricos-editor";
import "ricos-editor/dist/styles.min.css";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RicosEditor placeholder={"Type here!"} />;
      </header>
    </div>
  );
}

export default App;
