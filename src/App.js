
import './App.css';
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Create from "./Components/Create"
import Home from "./Components/Home";
import Templates from './Components/Templates';



function App() {




  return (
    <>
      <Navbar />


      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Create />} />
        <Route exact path='/template' element={<Templates />} />


      </Routes>


    </>
  );
}

export default App;
