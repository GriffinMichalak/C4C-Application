import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Login from './Login.jsx';
import './index.css';

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem('isLoggedIn', status);
  };

  return (
    <React.StrictMode>
      {isLoggedIn ? <App /> : <Login onLogin={handleLogin} />}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
