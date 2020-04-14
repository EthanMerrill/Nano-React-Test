import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import PostParser from './components/PostParser'
import { Button } from '@material-ui/core';
import ForceDirectedChart from "./components/ForceDirectedChart"
// import "./style.css"

function App() {
  return ( 
    <div>
    <Header />
    <MainContent />
    <PostParser text = '# Some Markdown'/>
    <Footer/>
    <Button variant="contained" color="primary">Hello World</Button>
    <ForceDirectedChart data = "graphData.json"/>
    </div>
    
  )
}

export default App