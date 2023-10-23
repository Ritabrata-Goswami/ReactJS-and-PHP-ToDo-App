// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import InsertPage from './pages/insert';
import DisplayPage from './pages/display';
import UpdatePage from './pages/update';
import Intro from './pages/intro';

function App() {
  return (
      <div>
         <div class="Insert">
            <a href="/insert"><button class="w3-button w3-green w3-hover-black btn">Insert</button></a>
            <a href="/display"><button class="w3-button w3-green w3-hover-black btn">Display</button></a>
            {/* <a href="/"><button class="w3-button w3-green w3-hover-black btn">Introduction</button></a> */}
         </div>
         <hr class="horizontal-ruler"/>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Intro/>}></Route>
               <Route path="/insert" element={<InsertPage/>}></Route>
               <Route path="/display" element={<DisplayPage/>}></Route>
               <Route path="/edit_to_do/:id" element={<UpdatePage/>}></Route>
            </Routes>
         </BrowserRouter>
      </div>
  );
}

export default App;
