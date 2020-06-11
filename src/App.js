import React from 'react';
import './App.scss';
import Navbar from './component/Navbar/Navbar';
import ToursList from "./component/TourList";

function App() {
  return (
    <React.Fragment>
      <Navbar/>   
        <ToursList/>
     </React.Fragment>

  );
}

export default App;
