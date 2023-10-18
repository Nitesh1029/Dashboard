import React from 'react'
import Header from './Components/Header';
import Charts from './Components/Charts';
import SideBar from './Components/SideBar'
import './App.css';
import Home from './Components/Home';

function App() {
    return (
        <div className='grid-container'>
            <Header/>
            <SideBar/>
            <Home/>


        </div>
    )
}

export default App