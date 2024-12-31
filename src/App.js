import './App.css';
import Dashboard from './components/Dashboard.js';
import {RemoveScrollBar} from 'react-remove-scroll-bar';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <RemoveScrollBar />
    </div>
  );
}

export default App;
