import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
function Registro() {


    return (

        <div class="row">
            
            <div class="col s6 offset-s3">
            <h1>Integrity SPA</h1>
            <label>
                Email:
                <input type="text" name="Email" />
            </label>

            <label>
                Username:
                <input type="text" name="Username" />
            </label>

            <label>
                Password:
                <input type="text" name="Password" />
            </label>

            <button class="waves-effect waves-light btn #bbdefb blue lighten-4" ><NavLink to="/">Registrarse</NavLink></button>
            <button class="waves-effect waves-light btn #bbdefb blue lighten-4" ><NavLink to="/">Regresar</NavLink></button>
            </div>
        </div>
    )
}

export default Registro;