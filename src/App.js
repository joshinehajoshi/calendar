import React, { useState, useEffect } from 'react';
import './App.css';
import Calender from './Calender';

function App() {

  const [someData, setSomeData] = useState(new Date());

  return (
    <div className="App">
   <Calender date={someData} />
    </div>
  );
}

export default App;
