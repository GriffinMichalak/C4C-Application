import React from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile({ partnerData }) {

  return (
    <div className="partner-tile">
      <img className="partner-thumbnail" src={partnerData.Logo} alt={`${partnerData.Name} Thumbnail`} />
      <hr />
      
      <h2>{partnerData.Name}</h2>

      <div className="partner-info">
        <p>{partnerData.Description}</p>
      </div>
    </div>
  )
}

export default PartnerTile;