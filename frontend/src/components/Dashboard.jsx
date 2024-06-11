import { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile';

function Dashboard() {
  const [partners, setPartners] = useState({});
  const [dropdownValue, setDropdownValue] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  // Load all partners on initial page load
  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setPartners(data);
      })
      .catch((err) => console.error('Error fetching partners:', err));
  }, []);

  // Handler for dropdown change
  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  // Add event listener for dropdown
  useEffect(() => {
    const dropdown = document.getElementById('active-dropdown');
    if (dropdown) {
      dropdown.addEventListener('change', handleDropdownChange);
    }

    // Cleanup the event listener
    return () => {
      if (dropdown) {
        dropdown.removeEventListener('change', handleDropdownChange);
      }
    };
  }, []);

  // Add event listener for 'searchbar'
  useEffect(() => {
    const searchbar = document.getElementById('search');
    if (searchbar) {
      searchbar.addEventListener('input', handleSearchChange);
    }

    // Cleanup the event listener
    return () => {
      if (searchbar) {
        searchbar.removeEventListener('input', handleSearchChange);
      }
    };
  }, []);

  // Handler for searchbar input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter active partners based on search query
  let visiblePartners = Object.keys(partners); // show everything, 'all', by default
  if (dropdownValue === 'active') {
    visiblePartners = visiblePartners.filter((key) => partners[key].IsActive === 1);
  } else if (dropdownValue === 'inactive') {
    visiblePartners = visiblePartners.filter((key) => partners[key].IsActive === 0);
  }

  // Filter partners based on search query
  if (searchQuery.trim() !== '') {
    visiblePartners = visiblePartners.filter((key) =>
      partners[key].Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  useEffect(() => {
    // Check if there are no results
    setNoResults(visiblePartners.length === 0);
  }, [visiblePartners]);

  return (
    <div id="main-content">
      <div id="main-partners-grid">
        {noResults ? (
          <p>🤔 No results found for '{searchQuery}'.</p>
        ) : (
          visiblePartners.map((key) => (
            <PartnerTile key={key} id={key} partnerData={partners[key]} />
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;