import React from "react";
import { Link } from "react-router-dom";
const Navbar = () =>{
    return(
        <nav className="navbar"> 
            <h2> Blog post</h2>
            <div className="links">
                <Link to ="/" >Home</Link> 
                <Link to ="/Form">Newblog</Link>
            </div>
        </nav>
    );
}
export default Navbar;