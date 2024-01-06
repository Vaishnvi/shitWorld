import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'; 
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Jank" heroname="Captain"> 
        <p1>This is children props</p1>
      </Greet>
      <Greet name="Suchi" heroname="Loki">
        <button>Action</button>
      </Greet>
      <Greet name="Vaish" heroname="Stark"/>
      <Welcome name="Jank" heroname="Captain"/>
      <Welcome name="Suchi" heroname="Loki"/>
      <Welcome name="Vaish" heroname="Stark"/>
    </div>
  );
}

export default App;
