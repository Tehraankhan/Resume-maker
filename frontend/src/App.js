
import './App.css';

import { Route, Routes } from "react-router-dom";
import Create from "./Components/Create"
import Home from "./Components/Home";
import Templates from "./Components/Templates/Listoftemplates"
import Datastate from "./context/Datastate"
import Signup from './Components/Userauthentication/Signup';
import  Signin  from './Components/Userauthentication/Signin';
import History from "./Components/History"
import Test from "./Components/Test"
import PrivteRoutes from './Components/PrivateRoutes';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import Template1Pdf from './Components/Templates/Template1/Template1Pdf';
import Middlepage from './Components/Middlepage';





function App() {




  return (
    <>
     <Datastate>
    


   
   

       <Routes>

        <Route exact path="/" element={<Home />} />
        <Route  path="/Home" element={<Create />} />
        <Route exact path="/template" element={ <Templates/> }/>
        <Route exact path="/Signup" element={<Signup/>}/>
        <Route exact path="/Signin" element={<Signin/>}/>
 
       
          <Route exact path='/History' element={<History/>}/>
          <Route exact path='/Test' element={<Test/>}/>
          <Route exact path='/Template1Pdf' element={<Template1Pdf/>}/>
          <Route exact path='/Middlepage' element={<Middlepage/>}/>
      
       
        


      </Routes>
    

     

</Datastate>
    </>
  );
}

export default App;
