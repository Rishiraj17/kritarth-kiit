import logo from "./logo.svg";
import "./App.css";
import About from "./About";
import Navbar from "./Navbar";
import Home from "./component/Home";
import background from "./images/Background_Image.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./component/Contact";
import Empty from "./component/Empty";
import Event from "./component/Event";
import Events from "./component/Events";
import { useEffect, useState } from 'react'



function App() {
  const [leads,setleads]= useState(0);
  return (
    <BrowserRouter className="overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Empty />} />
        <Route path="/event" element={<Event setleads={setleads}/>} />
        <Route path="/events" element= {<Events leads={leads} />} />


      </Routes>

      <Contact />
    </BrowserRouter>
  );
}

export default App;
