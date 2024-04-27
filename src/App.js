import React, { useEffect } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./content/signup/Signup";
import Home from "./pages/Home";
import Mealdeal from './content/Mealdeal/Mealdeal';
import LoginPage from './content/login/LoginPage';



const App = () => {
const getData = async () => 
{
  try {
    let res = await axios.get('http://localhost:4000/user');
    console.log(res.data);
    return res
  } catch (error) {
    console.log(error);
  }
}

  useEffect(()=>{
    getData()
  },[])


  return (
    <div>
      {/* <Signup /> */}
  
      {/* <UseEffectDataFEtch /> */}

      <Router>
        <Routes>
        <Route exact path='/' Component={Home} /> 
        <Route exact path='/signup' Component={Signup} /> 
        <Route exact path='/login' Component={LoginPage} />
        <Route exact path='/mealdeal'Component={Mealdeal}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App