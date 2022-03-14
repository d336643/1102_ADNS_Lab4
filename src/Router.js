import React from "react"
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/Login";
import {Routes, Route} from "react-router-dom";


//TODO: router root path
function Router() {
  // let history = useHistory()
    return (
      <Routes>
        <Route path="/~r10725032/" element={<HomePage />}/>
        <Route path="/~r10725032/chat" element={<ChatPage />}/>
        <Route path="/~r10725032/login" element={<LoginPage />}/>
      </Routes> 
    )
  }
  
  export default Router;
