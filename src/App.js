import { useHistory } from "react-router-dom";
import './App.css';
// import Ham from './Ham/Ham';


import Routerpage from './pages/Routerpage';
import AuthRoute from './pages/AuthRoute';
import { useEffect, useState } from 'react';

function App() {
  let history = useHistory();

  const [ isLoggedIn, setIsLoggedIn ]  = useState(false);
  useEffect(() => {
    checkAuth();
  })
  const checkAuth = () => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setIsLoggedIn(true);
      history.push("/");
    } else {
      history.push('/login')
    }
  }
  return (
    <>
   
    <div className="App">
    {
      isLoggedIn && <Routerpage />
    }
    {
      !isLoggedIn && <AuthRoute />
    }
{/* <Ham/> */}
    

    </div>
    </>
    
  );
}

export default App;