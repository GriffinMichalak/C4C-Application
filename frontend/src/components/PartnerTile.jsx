import React, { useState } from 'react';

// Close popup if clicked off of
window.addEventListener('click', function (event) {
  let popup = document.getElementById("edit-partner-popup");
  if (event.target == popup) {
      popup.style.display = "none";
  }
});

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/
function PartnerTile({ id, partnerData }) {

  const handleSave = () => {
    // Save the partner data to the database
    console.log("Save!");
  }

  const handleDelete = () => {
    const confirmDelete = window.confirm("Delete this partner?");
    
    if (confirmDelete) {
      fetch(`http://localhost:4000/delete-partner/${id}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete partner');
        }
        console.log("Partner deleted successfully");
        location.reload();
      })
      .catch(error => {
        console.error('Error deleting partner:', error);
      });
    }
  };
  
  const editButtonClick = () => {
    let popup = document.getElementById("edit-partner-popup");
    if (popup.style.display === "none" || popup.style.display === "") {
      popup.style.display = "block";

      console.log(id);

      document.getElementById('edit-name').value = partnerData.Name;
      document.getElementById('edit-url').value = partnerData.URL;
      document.getElementById('edit-logo').value = partnerData.Logo;
      document.getElementById('edit-description').value = partnerData.Description;
      document.getElementById('edit-isactive').checked = (partnerData.IsActive === 1);
    } 
    else {
      popup.style.display = "none";
    }

    //console.log(partnerData.Name);
  };


  return (
    <div>
      {/* ========= POPUP ========= */}
      <div id="edit-partner-popup" className="modal">
        <div className="modal-content">
          <span className="close" onClick={editButtonClick}> &times; </span>
          <h2>Edit Partner</h2>
          <div id="form-container">
            <form>
              <label htmlFor="edit-name">Name</label>
              <input type="text" id="edit-name" name="edit-name" required />

              <label htmlFor="edit-url">URL</label>
              <input type="url" id="edit-url" name="edit-url" required />

              <label htmlFor="edit-logo">Logo</label>
              <input type="url" id="edit-logo" name="edit-logo" required />

              <label htmlFor="edit-description">Description</label>
              <textarea id="edit-description" name="edit-description" rows="4" cols="50" required></textarea>

              <label htmlFor="edit-isactive">Active?</label>
              <input type="checkbox" id="edit-isactive" name="edit-isactive" />

              <div id="delete-button" style={{ textAlign: 'center', display: 'flex' }}>
                <input className='save-edit-button' onClick={handleSave} type="submit" value="Save" />
                <button className='delete-button' onClick={handleDelete}><i className="fa-solid fa-trash-can"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ========= TILE ========= */}
      <div className="partner-tile">
        <div className="tile-top-right">
          {partnerData.IsActive === 1 && (
            <div className="checkbox-container">
              <label title="Active"><i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i></label>
            </div>
          )}
          {partnerData.IsActive === 0 && (
            <div className="checkbox-container">
              <label title="Inactive"><i className="fa-solid fa-circle-xmark" style={{ color: 'red' }}></i></label>
            </div>
          )}
        </div>

        <a href={partnerData.URL} target="_blank" rel="noopener noreferrer"><img className="partner-thumbnail" src={partnerData.Logo} alt={`${partnerData.Name} Thumbnail`} /></a>

        <h2>{partnerData.Name}</h2>

        <div className="partner-info">
          <p>{partnerData.Description}</p>
        </div>

        <div className="tile-bottom-right">
          <a onClick={editButtonClick} title="Edit"><i className="fa-solid fa-pen-to-square"></i></a>
        </div>

      </div>
    </div>
  );
}

export default PartnerTile;