import React, { useState } from 'react';

function SearchBar() {

    return (
        <div id="searchbar">
            <form>
                <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <input type="text" id="search" placeholder="Search..." autoFocus/>
            </form>
        </div>
    )
}

export default SearchBar;
