import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";



const Navbar=()=>{
    const [info]=useState(
        ["Home","Expérienceprofessionnelle","Formation","Compétences","Langues"]
    )

   return(
    <div className="navbar">
        <span><Link className="link" to={"Home"}>CV</Link></span>
        <ul>
           {
            info.map((ele)=>( 
                  <li id={ele}><Link className="link" to={ele}>{ele}</Link></li>
            ))
           }
        </ul>
    </div>
   )
}
export default Navbar;