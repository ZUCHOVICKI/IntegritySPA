
import React, { useState, useEffect } from "react";

import axios from "axios";
function Buscador() {
    const [data, setData] = useState([]);
    const [filtereddata, setfilteredData] = useState([]);
    const [filter, setfilter] = useState("");
    
    useEffect(() => {
      (async () => {
        const result = await axios("https://jsonplaceholder.typicode.com/users");
        setData(result.data);
        setfilteredData(result.data)
      })();
    }, []);
    
  
    
    
    return (

        <div>
            

            <h1>Integrity SPA</h1>

            <input type="text" name="Busqueda" onChange={event => {
                setfilter(event.target.value)
                const newData = data.filter(function(item){
                    const itemData = item.name.toUpperCase()
                    const textData = filter.toUpperCase()
                    return itemData.indexOf(textData) > -1})
                setfilteredData(newData)
                }}></input>
            <div>
                <h4>Resultados de Busqueda</h4>
            </div>

        <table>
        <thead>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </thead>
        {filtereddata.map((val, key) => {
          return (
            <tbody key={key}>
              <td>{val.name}</td>
              <td>{val.username}</td>
              <td>{val.email}</td>
            </tbody>
          )
        })}

        </table>
        </div>
    )
}

export default Buscador;