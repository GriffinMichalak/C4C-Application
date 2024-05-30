import React, { useState } from 'react';

// Close popup if clicked off of
window.addEventListener('click', function (event) {
    let popup = document.getElementById("add-partner-popup");
    if (event.target == popup) {
        popup.style.display = "none";
    }
});

const buttonClick = () => {
    let popup = document.getElementById("add-partner-popup");
    if (popup.style.display == "none" || popup.style.display == "") {
        popup.style.display = "block";
    }
    else {
        popup.style.display = "none";
    }
};

function AddPartnerPopup() {
    const [formData, setFormData] = useState({
        name: '',
        url: '',
        logo: '',
        description: '',
        isactive: false
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div id="add-partner-popup" className="modal">
            <div className="modal-content">
                <span className="close" onClick={buttonClick}> &times; </span>
                <h2>Add a Partner</h2>

                <div id="form-container">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Lucy's Love Bus" required onChange={handleChange} />

                        <label htmlFor="url">URL</label>
                        <input type="url" id="url" name="url" placeholder="https://lucyslovebus.org/" required onChange={handleChange} />

                        <label>Logo (URL)</label>
                        <input type="url" id="logo" name="logo" placeholder="https://c4cneu-public/LLB_2019_rgb.png" required onChange={handleChange} />

                        <label>Description</label>
                        <input type="text" id="description" name="description" placeholder="Lucy's Love Bus is pretty cool!" required onChange={handleChange} />

                        <label>Active?</label>
                        <input type="checkbox" id="isactive" name="isactive" onChange={handleChange} />
                    
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddPartnerPopup;
