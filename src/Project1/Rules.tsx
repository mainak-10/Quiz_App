//import React from "react";
import Menu from "./Menu";
import Login from "./Login";
import Quiz from "./Quiz";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./About";

const Rules=()=>{

  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Menu/>}/>
        <Route path="/about" element={<About/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/quiz" element={<Quiz/>}/>
       

      </Routes>
    </BrowserRouter>
    </>
  )
}
export default Rules;
