import React, { useEffect, useState } from 'react'
import "./Feed.css"
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"
import {API_KEY} from "../../data.js"
import { Link } from 'react-router-dom'
import {viewCount} from  "../../data.js"
import moment from 'moment'
import { useVideoContext } from '../../Contex/VideoContextProvider.jsx'

const Feed = () => {
    
   const {data}  = useVideoContext()
  
  return (

       <div className="feed">
        {data.map((item,index)=>{
            return (
                <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={index}>
                        <img src={item.snippet.thumbnails.medium.url} alt="" /> 
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{item.statistics? viewCount(item.statistics.viewCount):"1k"} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </Link>
            )
        })
       }
       </div>
    
  )
}

export default Feed