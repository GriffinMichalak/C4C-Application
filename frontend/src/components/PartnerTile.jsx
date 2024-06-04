import React from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile({ id, partnerData }) {

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
    let popup = document.getElementById(`edit-partner-popup-${id}`);
    if (popup.style.display === "none" || popup.style.display === "") {
      popup.style.display = "block";

      console.log(id);

      document.getElementById(`edit-name-${id}`).value = partnerData.Name;
      document.getElementById(`edit-url-${id}`).value = partnerData.URL;
      document.getElementById(`edit-logo-${id}`).value = partnerData.Logo;
      document.getElementById(`edit-description-${id}`).value = partnerData.Description;
      document.getElementById(`edit-isactive-${id}`).checked = (partnerData.IsActive === 1);
    } 
    else {
      popup.style.display = "none";
    }
  };

  return (
    <div>
      {/* ========= POPUP ========= */}
      <div id={`edit-partner-popup-${id}`} className="modal">
        <div className="modal-content">
          <span className="close" onClick={editButtonClick}> &times; </span>
          <h2>Edit Partner</h2>
          <div id="form-container">
            <form>
              <label htmlFor={`edit-name-${id}`}>Name</label>
              <input type="text" id={`edit-name-${id}`} name="edit-name" required />

              <label htmlFor={`edit-url-${id}`}>URL</label>
              <input type="url" id={`edit-url-${id}`} name="edit-url" required />

              <label htmlFor={`edit-logo-${id}`}>Logo</label>
              <input type="url" id={`edit-logo-${id}`} name="edit-logo" required />

              <label htmlFor={`edit-description-${id}`}>Description</label>
              <textarea id={`edit-description-${id}`} name="edit-description" rows="4" cols="50" required></textarea>

              <label htmlFor={`edit-isactive-${id}`}>Active?</label>
              <input type="checkbox" id={`edit-isactive-${id}`} name="edit-isactive" />
            </form>
          </div>

          <div id="delete-button" style={{ textAlign: 'center', display: 'flex' }}>
            <input className='save-edit-button' type="submit" value="Save" />
            <button className='delete-button' onClick={handleDelete}><i className="fa-solid fa-trash-can"></i></button>
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
