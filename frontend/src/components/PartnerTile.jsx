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
    }
    else {
        popup.style.display = "none";
    }

    console.log(partnerData.Name);
};

  return (
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
  )
}

export default PartnerTile;
