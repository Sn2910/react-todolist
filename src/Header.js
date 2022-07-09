import React from "react";
import Board from "./Board";
import SearchBar from "./SearchBar";

function Header(){
    return (
        <div className="navbar_container">
            <div className="navbar">
                <h2>To do list</h2>
                <SearchBar />
            </div>            
        </div>
    )
}
export default Header




