import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import NotFound from './components/NotFound';

const App = ()=>{
  const [progress, setProgress] = useState(0) 
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

    return (
      <>
        <Router>
          <NavBar className="NavBar" />
          <LoadingBar height={3} color='#173e43' progress={progress} />
          <Routes>
        
            <Route exact path='/' element={<News key='general' apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} 
            country="in" category='general'/>}/>
            
            <Route exact path='/science' element={<News key='science' apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} 
            country="in" category='science'/>}/>
            
            <Route exact path='/business' element={<News key='business' apiKey={apiKey} setProgress={setProgress} pageSize=
            {pageSize} country="in" category='business'/>}/>
            
            <Route exact path='/entertainment' element={<News key='entertainment' apiKey={apiKey} setProgress={setProgress} 
            pageSize={pageSize} country="in" category='entertainment'/>}/>
            
            {/* <Route exact path='/general' element={<News key='general' apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} 
            country="in" category='general'/>}/> */}
            
            <Route exact path='/health' element={<News key='health' apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} 
            country="in" category='health'/>}/>
            
            <Route exact path='/sports' element={<News key='sports' apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} 
            country="in" category='sports'/>}/>
            
            <Route exact path='/technology' element={<News key='technology' apiKey={apiKey} setProgress={setProgress} pageSize=
            {pageSize} country="in" category='technology'/>}/>

            <Route exact path='/notfound' element={<NotFound/>}/>

          </Routes>
        </Router>
      </>
    )
}

export default App