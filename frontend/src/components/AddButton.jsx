import React, { useState } from 'react';

function AddButton() {
    const [showPopup, setShowPopup] = useState(false);

    const buttonClick = () => {
        let popup = document.getElementById("add-partner-popup");
        if (popup.style.display == "none" || popup.style.display == "") {
            popup.style.display = "block";
        }
        else {
            popup.style.display = "none";
        }
    };

    return (
        <div id="add-partner">
            <button title="New Project" onClick={buttonClick}>Add</button>
        </div>
    )
}

export default AddButton;
