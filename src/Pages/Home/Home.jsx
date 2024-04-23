import React, { useEffect, useState } from 'react'
import "./Home.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import { useVideoContext } from '../../Contex/VideoContextProvider'


const Home = ({sidebar}) => {
  const {data, fetchData, isLoading,category}  = useVideoContext()
 
  useEffect(()=>{
    fetchData()
},[category])
  
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar?"":'large-container'}`}>
         <Feed data={data} fetchVideos={fetchData} isLoading={isLoading} />
        
      </div>
    </>
  )
}

export default Home