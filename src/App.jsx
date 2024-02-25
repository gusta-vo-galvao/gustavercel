import React from 'react'
import Butterfly from './components/Butterfly'  
import './App.css'
import borboleta from './img/gifborboleta.gif';

const App = () => {
  return (
    
    <div className="image-container">
    <h1 className='caption'>Quer sair cmg ratinha?</h1>
    <img src={borboleta} alt="borboleta" />
    <Butterfly/>
    
   </div>
  )
}

export default App