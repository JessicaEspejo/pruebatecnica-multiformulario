import './App.css';
import Login from './components/Perfil'

import MyModal from './components/MyModal';
import React, { Fragment, useState } from 'react';

function App() {

const [showModal, setShowModal] = useState(true)

  return (
    <Fragment>
      <div className="App">
        {/* <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5' 
        onClick={()=> setShowModal(true)}>texto modal</button> */}


   
        <Login />
    

        <MyModal isVisible={showModal} onClose={() => setShowModal(false)}/>
      </div>
    </Fragment>
  );
}

export default App;
