import React from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile({ partnerData }) {


  const editButtonClick = () => {
    let popup = document.getElementById("edit-partner-popup");
    if (popup.style.display == "none" || popup.style.display == "") {
        popup.style.display = "block";

        let n = document.getElementById('partner-name');
        n.innerHTML = partnerData.Name;
    }
    else {
        popup.style.display = "none";
    }

    console.log(partnerData.Name);
};

  return (
    <div>
      <div id="edit-partner-popup" className="modal">
          <div className="modal-content">
              <span className="close" onClick={editButtonClick}> &times; </span>
              <h2>Edit Partner</h2>
              <h3 id="partner-name">{partnerData.Name}</h3>

              <div id="delete-button" style={{ textAlign: 'center', display: 'flex'}}>
                  <input className='save-edit-button' type="submit" value="Save" />
                  <button className='delete-button'><i className="fa-solid fa-trash-can"></i></button>
              </div>
          </div>
      </div>

      <div className="partner-tile">
        <div className="tile-top-right">
          {partnerData.IsActive == 1 && ( 
            <div className="checkbox-container">
              <label title="Active"><i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i></label>
            </div>
          )}
          {partnerData.IsActive == 0 && ( 
            <div className="checkbox-container">
              <label title="Inactive"><i className="fa-solid fa-circle-xmark" style={{ color: 'red' }}></i></label>
            </div>
          )}        
        </div>

        <a href={partnerData.URL} target="_blank"><img className="partner-thumbnail" src={partnerData.Logo} alt={`${partnerData.Name} Thumbnail`} /></a>
        
        <h2>{partnerData.Name}</h2>

        <div className="partner-info">
          <p>{partnerData.Description}</p>
        </div>

        <div className="tile-bottom-right">
          <a onClick={editButtonClick} title="Edit"><i className="fa-solid fa-pen-to-square"></i></a>    
        </div>

      </div>
    </div>

  )
}

export default PartnerTile;