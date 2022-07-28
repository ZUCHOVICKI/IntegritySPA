import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
function Login() {
    

    return (

        <div class="row">
            
            <div class="col s6 offset-s3">
            <h1>Integrity SPA</h1>
                <label>
                    Username:
                    <input type="text" name="Username" />
                </label>

                <label>
                    Password:
                    <input type="text" name="Password" />
                </label>
                
                <button class="waves-effect waves-light btn #bbdefb blue lighten-4" ><NavLink to="/Buscador">Ingresar</NavLink></button>
                <button class="waves-effect waves-light btn #bbdefb blue lighten-4" ><NavLink to="/Registro">Registrarse</NavLink></button>
                </div>
        </div>
    )
}

export default Login;