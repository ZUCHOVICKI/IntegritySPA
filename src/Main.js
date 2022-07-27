import React from "react";

import {
    Route,
    NavLink,
    HashRouter,
    Routes
  } from "react-router-dom";
 
  import Login from "./login"
  import Buscador from "./Buscador";
  import Registro from "./registro";

function Main() {
    

    return (
        <HashRouter>
        <div>
            <h1>Integrity SPA</h1>

            {/* <NavLink to="/">Home</NavLink> */}

            <div id="content">
            <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Buscador" element={<Buscador/>}/>
            <Route path="/Registro" element={<Registro/>}/>
            </Routes>
            </div>
            
        </div>
        </HashRouter>
    )
}

export default Main;