import './App.css';
import Nameform from './components/Nameform';
import Orderform from './components/Orderform';
import { useEffect, useState } from 'react'
function App() {
  return (
    <div className="App">
      <Nameform/>
      {/* {modal && <Orderform setShow={setShow} setModal={setModal} />} */}
      
    </div>
  );
}

export default App;
