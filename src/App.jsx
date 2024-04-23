import React, { useContext, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home/Home"
import Video from "./Pages/Video/Video"
import VideoContextProvider from './Contex/VideoContextProvider'
import Feed from './Components/Feed/Feed'
import Search from './Pages/Search/Search'



const App = () => {
  const [sidebar, setSidebar] = useState(true)
  
  
  return (
    <div>
        <VideoContextProvider>
          <Navbar setSidebar={setSidebar}/>
          <Routes>
            <Route  path="/" element={<Home sidebar={sidebar} />} />
          
            <Route path="/search" element={<Search />} />
             
            <Route path="/video/:videoId" element={<Video />} />
          </Routes>
        </VideoContextProvider>
    </div>
  )
}


export default App