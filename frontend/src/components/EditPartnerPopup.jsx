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

                <div id="delete-button" style={{ textAlign: 'center', display: 'flex'}}>
                    <input className='save-edit-button' type="submit" value="Save" />
                    <button className='delete-button'><i className="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        </div>
    );
}

export default EditPartnerPopup;