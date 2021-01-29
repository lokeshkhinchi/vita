import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import MainContent from './MainContent';
import { scrollTop } from './custom';


function App() {

  useEffect(() => {
    scrollTop();
  }, [])

  return (
    <Router>
    <div className="App">
      <div id="preloader" className="d-none">
        <div className="outer">
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        </div>
      </div>

      <div className="site-wrapper">
        <div className="mobile-header py-2 px-3 mt-4">
          <button className="menu-icon mr-2">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="index.html" className="logo"><img src="images/logo.png" alt="Bako Doe" /></a>
          <a href="index.html" className="site-title dot ml-2">Bako Doe</a>
        </div>

        <SideBar />
        <MainContent />
        
      </div>
    </div>
    
    <a href="javascript:" id="return-to-top"><i class="fa fa-chevron-up"></i></a>
    </Router>
  );
}

export default App;
