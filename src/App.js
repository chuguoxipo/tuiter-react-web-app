import './App.css';
import Labs from "./Labs/index.js";
import HelloWorld from "./Labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import TodoList from "./Labs/a6/todo/todo-list";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route index
                   element={<Labs/>}/>
            <Route path="/hello"
                   element={<HelloWorld/>}/>
            <Route path="/tuiter/*"
                   element={<Tuiter/>}/>
            <Route path="/todo"
                   element={<TodoList/>}/>
          </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
