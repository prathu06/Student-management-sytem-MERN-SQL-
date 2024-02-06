import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Create from "./Create";
import Update from "./Update";
import Navbar from "./Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
   <>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/create" element={<Create/>}/>
<Route path="/update" element={<Update/>}/>
<Route path="*" element={<Home/>}/>
</Routes>
</BrowserRouter>

</>
  );
}

export default App;
