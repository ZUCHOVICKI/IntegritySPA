import React, { Component } from "react";
import React, { useState, useEffect } from "react";

import axios from "axios";
function Buscador() {
    const [data, setData] = useState([]);

    useEffect(() => {
      (async () => {
        const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
        setData(result.data);
      })();
    }, []);

    return (

        <div>
            

           

            <input type="text" name="Busqueda" ></input>
            <div>
                <h4>Resultados de Busqueda</h4>
            </div>

        

        </div>
    )
}

export default Buscador;