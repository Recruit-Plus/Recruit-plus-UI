<<<<<<< HEAD
import React from "react";

function App() {
  return (
    <>
    </>
=======
import React from 'react';
import Addquestions from './components/addquestions';
import EditQuestionPage from './components/EditQuestionPage';
import FullScreenDialog from './components/FullScreenDialog';
import {Typography,Button,CssBaseline,Grid,Container} from '@mui/material';


import {
  BrowserRouter as Router,
  
  Route,
  Link,
  NavLink,
  Routes
} from "react-router-dom";
function App() {

 return (
  
  <>
   
  <Routes>
    <Route path='/' element={ <Addquestions />}>
   
    </Route>
    <Route path='/Home' element={ <EditQuestionPage/>}>

     
    </Route>
   
    <Route path="/FullScreenDialog" element={<FullScreenDialog />} />
  </Routes>
 
    </>
     
>>>>>>> 957485058d54838f4634c7483606cdb38d5ce888
  );
}

export default App;
