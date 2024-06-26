import React, { useState } from 'react';
import PartnerTile from './PartnerTile';

function ParentComponent({ partnerDataList }) {
    const [partnerName, setPartnerName] = useState("");

    return (
        <div>
            {partnerDataList.map((partnerData, index) => (
                <PartnerTile 
                    key={index}
                    partnerData={partnerData}
                    setPartnerName={setPartnerName}
                />
            ))}
            <EditPartnerPopup partnerName={partnerName} />
        </div>
    );
}

export default ParentComponent;
