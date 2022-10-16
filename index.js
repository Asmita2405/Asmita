
import React from 'react';
import ReactDOM from 'react-dom/client';
import Add from './components/Add';
import Header from './components/Header';
import Show from './components/Show';
import Home from'./components/Home';
import Counter from'./components/Counter';
import Hook1 from'./components/Hook1';
import{
  BrowserRouter,
  Routes,
  Route,
  }from "react-router-dom"

 var record =(
  <BrowserRouter>
  <div className="container">
    <Header></Header>
    <Routes>
    <Route path=''element={<Home/>}/>
      <Route path='Addrecord'element={<Add/>}/>
      <Route path='Showrecord'element={<Show/>}/>
      <Route path='Counterrecord'element={<Counter name="Asmita" age="26"/>}/>
      <Route path='Hookrecord'element={<Hook1/>}/>

    </Routes>
  </div>
 
  </BrowserRouter>
)
var target=ReactDOM.createRoot(document.getElementById("root"));

 target.render(record)
