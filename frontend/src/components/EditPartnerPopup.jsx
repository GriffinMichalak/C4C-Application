import React, { useState } from 'react';

function EditPartnerPopup() {

    const buttonClick = () => {
        let popup = document.getElementById("edit-partner-popup");
        if (popup.style.display == "none" || popup.style.display == "") {
            popup.style.display = "block";
        }
        else {
            popup.style.display = "none";
        }
    };

    return (
        <div id="edit-partner-popup" className="modal">
            <div className="modal-content">
                <span className="close" onClick={buttonClick}> &times; </span>
                <h2>Edit Partner</h2>
            </div>
        </div>
    );
}

export default EditPartnerPopup;
