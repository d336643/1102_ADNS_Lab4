import React from "react"
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/Login";
import {Routes, Route, BrowserRouter} from "react-router-dom";



function Router() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/chat" element={<ChatPage />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes> 
    )
  }
  
  export default Router;
