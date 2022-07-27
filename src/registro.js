import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
function Registro() {


    return (

        <div>
            

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

            <button ><NavLink to="/">Registrarse</NavLink></button>
            <button ><NavLink to="/">Regresar</NavLink></button>

        </div>
    )
}

export default Registro;