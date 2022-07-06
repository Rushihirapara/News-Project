
import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import { BrowserRouter ,Routes ,Route } from "react-router-dom";

const App=()=> {
 const pagesize=6;
 const Apikey=process.env.REACT_APP_NEWS_API

 
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        
        
           <Routes>
          <Route path="/"element={<News  apiKey={Apikey} pagesize={pagesize} country='in' category='general'/>}/>
          <Route path="/business"element={<News  apiKey={Apikey} pagesize={pagesize} country='in' category='business'/>}/>
          <Route path="/entertainment" element={<News  apiKey={Apikey} pagesize={pagesize} country='in' category='entertainment'/>}/>
          <Route path="/general"element={<News  apiKey={Apikey} pagesize={pagesize} country='in' category='general'/>} />
          <Route path="/health"element={<News  apiKey={Apikey} pagesize={pagesize} country='in' category='health'/>}/>
          <Route path="/science" element={<News  apiKey={Apikey} pagesize={pagesize} country='in' category='science'/>}/>
          <Route path="/sports"element={<News  apiKey={Apikey} pagesize={pagesize} country='in' category='sports'/>}/> 
          <Route path="/technology" element={<News  apiKey={Apikey} pagesize={pagesize} country='in' category='technology'/>}/>         
          
          </Routes>
      </BrowserRouter>
      </div>

    )
  }

  export default App


