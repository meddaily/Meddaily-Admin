import { useHistory } from 'react-router-dom';
import './App.css';
// import Ham from './Ham/Ham';

import Routerpage from './pages/Routerpage';
import AuthRoute from './pages/AuthRoute';
import { useEffect, useState } from 'react';
// import Ham from "./Ham/Ham";

function App() {
  let history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    checkAuth();
  }, []);
  // const checkAuth = () => {
  //   const authToken = localStorage.getItem("authToken");
  //   if (authToken) {
  //     setIsLoggedIn(true);
  //     history.push("/");
  //   } else {
  //     history.push('/login')
  //   }
  // }

  const checkAuth = () => {
    const loginAuthToken = localStorage.getItem('authToken'); // admin login token
    const distributorAuthToken = localStorage.getItem('disToken'); // Distributor login token
    // const authToken = localStorage.getItem("authToken");
    const currentPath = history.location.pathname;

    if (loginAuthToken) {
      setIsLoggedIn(true);
      if (currentPath !== '/login') {
        history.push('/');
      }
    } else if (distributorAuthToken) {
      setIsLoggedIn(true);
      if (currentPath !== '/distributorlogin') {
        history.push('/distdashboard');
      }
    } else {
      setIsLoggedIn(false);
      if (currentPath !== '/distributorlogin') {
        history.push('/login');
      }
    }
  };

  return (
    <>
      <div className="App">
        {isLoggedIn && <Routerpage />}
        {!isLoggedIn && <AuthRoute />}
        {/* <Ham/> */}
      </div>
    </>
  );
}

export default App;
