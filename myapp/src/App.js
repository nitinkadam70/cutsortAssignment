import logo from './logo.svg';
import './App.css';
import Form from './Page/Form';
import StepContext from './Context/StepContext';

function App() {
  return (
    <div className="App">
      <StepContext>
        <Form />
      </StepContext>
    </div>
  );
}

export default App;
