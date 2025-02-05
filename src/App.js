import Home from './screens/Home.js';
import AddItem from './screens/AddItem.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/additem" element={<AddItem />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
