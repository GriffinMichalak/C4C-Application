import './App.css'
import Dashboard from './components/Dashboard'
import AddButton from './components/AddButton'
import AddPartnerPopup from './components/AddPartnerPopup'
import ActiveDropdown from './components/ActiveDropdown'
import SearchBar from './components/Searchbar'
import EditPartnerPopup from './components/EditPartnerPopup'

function App() {

  return (
    <>
      <h1 className="title">
        Code4Community: Projects
      </h1>

      <div className="header-controls">
        <ActiveDropdown />
        <AddButton />
        <SearchBar />
      </div>
      
      <AddPartnerPopup />
      <EditPartnerPopup />
      <Dashboard />
    </>
  )
}

export default App