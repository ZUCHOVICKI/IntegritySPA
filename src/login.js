import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
function Login() {
    

    return (

        <div>
            
            
                <label>
                    Username:
                    <input type="text" name="Username" />
                </label>

                <label>
                    Password:
                    <input type="text" name="Password" />
                </label>
                
                <button ><NavLink to="/Buscador">Ingresar</NavLink></button>
                <button ><NavLink to="/Registro">Registrarse</NavLink></button>
            
        </div>
    )
}

export default Login;