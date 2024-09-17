import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/home';

function App() {
  return (
    <div className="App">
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<h1>hello worl1</h1>} />
   </Routes>
    </div>
  );
}

export default App;
