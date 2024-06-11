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
        id: '',
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

        // Construct the partner object
        const newPartner = {
            Id: formData.id,
            Name: formData.name,
            URL: formData.url,
            Logo: formData.logo,
            Description: formData.description,
            IsActive: formData.isactive ? 1 : 0
        };

        console.log(newPartner);

        // Send the POST request to the server
        fetch('http://localhost:4000/add-partner', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPartner)
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            location.replace(location.href);
            buttonClick();
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div id="add-partner-popup" className="modal">
            <div className="modal-content">
                <span className="close" onClick={buttonClick}> &times; </span>
                <h2>Add a Partner</h2>

                <div id="form-container">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="id">ID</label>
                        <input type="text" id="id" name="id" placeholder="LLB" required onChange={handleChange} />

                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Lucy's Love Bus" required onChange={handleChange} />

                        <label htmlFor="url">URL</label>
                        <input type="url" id="url" name="url" placeholder="https://lucyslovebus.org/" required onChange={handleChange} />

                        <label htmlFor="logo">Logo (URL)</label>
                        <input type="url" id="logo" name="logo" placeholder="https://c4cneu-public/LLB_2019_rgb.png" required onChange={handleChange} />

                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" rows="4" cols="50" maxLength="350" required onChange={handleChange}></textarea>

                        <label htmlFor="isactive">Active?</label>
                        <input type="checkbox" id="isactive" name="isactive" onChange={handleChange} />
                    
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddPartnerPopup;