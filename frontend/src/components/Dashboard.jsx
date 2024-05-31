import { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile';

function Dashboard() {
  const [partners, setPartners] = useState({});
  const [dropdownValue, setDropdownValue] = useState('all');

  // Load all partners on initial page load
  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => setPartners(data))
    .catch((err) => console.error('Error fetching partners:', err));
  }, []);

  // Handler for dropdown change
  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  // Add event listener on mount and remove on unmount
  useEffect(() => {
    const dropdown = document.getElementById('active-dropdown');
    if (dropdown) {
      dropdown.addEventListener('change', handleDropdownChange);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (dropdown) {
        dropdown.removeEventListener('change', handleDropdownChange);
      }
    };
  }, []);

  // Filter active partners
  console.log(dropdownValue)
  let a = 1

  let visiblePartners = Object.keys(partners);
  if (dropdownValue == 'active') {
    visiblePartners = Object.keys(partners).filter((key) => partners[key].IsActive === 1);
  }
  else if (dropdownValue == 'inactive') {
    visiblePartners = Object.keys(partners).filter((key) => partners[key].IsActive === 0);
  }
  
  return (
    <div id="main-content">      
      <div id="main-partners-grid">
        {visiblePartners.map((key) => (
          <PartnerTile key={key} partnerData={partners[key]} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
