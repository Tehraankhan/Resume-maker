
import './App.css';

import { Route, Routes } from "react-router-dom";
import Create from "./Components/Create"
import Home from "./Components/Home";
import Templates from "./Components/Templates/Listoftemplates"
import Datastate from "./context/Datastate"
import Signup from './Components/Userauthentication/Signup';
import  Signin  from './Components/Userauthentication/Signin';
import History from "./Components/History"
import PrivteRoutes from './Components/PrivateRoutes';
import { Provider } from 'react-redux';
import Store from './Store/Store';





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
      
       
        


      </Routes>
    

     

</Datastate>
    </>
  );
}

export default App;
