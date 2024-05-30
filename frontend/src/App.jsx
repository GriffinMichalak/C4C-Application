import './App.css'
import Dashboard from './components/Dashboard'
import AddButton from './components/AddButton'
import AddPartnerPopup from './components/AddPartnerPopup'

function App() {

  return (
    <>
      <h1 className="title">
        Code4Community: Projects
      </h1>

      <AddButton />
      <AddPartnerPopup />
      <Dashboard />
    </>
  )
}

export default App