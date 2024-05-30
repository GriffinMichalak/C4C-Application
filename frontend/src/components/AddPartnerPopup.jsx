import React, { useState } from 'react';

const buttonClick = () => {
    let popup = document.getElementById("project-info-popup");
    if (popup.style.display == "none" || popup.style.display == "") {
        popup.style.display = "block";
    }
    else {
        popup.style.display = "none";
    }
};

function AddPartnerPopup() {
    return (
        <div id="project-info-popup" className="modal">
            <div className="modal-content">
                <span className="close" onClick={buttonClick}> &times; </span>
                <p>Add a Partner</p>
            </div>
        </div>
    )
}

export default AddPartnerPopup;
