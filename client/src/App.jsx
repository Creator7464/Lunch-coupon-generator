import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlayout from "./pages/Userlayout";
import Dashboard from "./Components/Dashboard"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Userlayout/>}>
        <Route index element = {<Dashboard />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

