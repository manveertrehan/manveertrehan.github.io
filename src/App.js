import logo from './logo.svg';
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import './App.css';
import "./index.css";


function App() {

  return (
    <div className="port">
      <div className="rowLine">
        <div>
          <Header />
        </div>
      </div>
      <hr></hr>
      <Projects />
      <div className="blank">
      -
      </div>
      <hr></hr>
      <Experience />
    </div>
  );
}

export default App;
