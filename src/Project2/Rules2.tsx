import React from "react";

import Recipe from "./Recipe";
import Detail from "./Detail";
import { BrowserRouter,Routes,Route } from "react-router-dom";


const Rules2=()=>{
  return(
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Recipe/>}/>
            <Route path="/detail" element={<Detail/>}/>
            
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default Rules2;