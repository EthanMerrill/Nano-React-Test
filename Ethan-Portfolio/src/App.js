import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import PostParser from './components/PostParser'

import "./style.css"

function App() {
  return ( 
    <div>
    <Header />
    <MainContent />
    <PostParser text = '# Some Markdown'/>
    <Footer/>
    </div>
    
  )
}

export default App