import React, { useEffect, useState } from 'react'
import "./Recommended.css"
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"
import { API_KEY, viewCount } from '../../data'
import { Link, } from 'react-router-dom'

const getVideoLink = ( item, categoryId) => {
    const videoId = typeof item.id === 'string' ? item.id : item.id.videoId
    let videoLink = `/video/${videoId}`;
  
    if (categoryId) {
      videoLink += `?categoryId=${categoryId}`
    }
  
    return videoLink
  }

const Recommended = ({category, }) => {
   
   const [apiData , setApiData] = useState([]) 
  const fetchData = async ()=>{
        const relatedVideo_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2C%20statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(relatedVideo_Url).then(res => res.json()).then(data => {
            setApiData(data.items)
        })
       }

   useEffect(()=>{
      fetchData()
   },[])
  
  return (
    <div className='recommended'>
        {apiData.map((item,index)=>{
            return (
            <Link to={getVideoLink(item, item.snippet?.categoryId)} key={index} className="side-video-list">
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <div className="vid-info">
                    <h4>{item.snippet.title}</h4>
                    <p>{item.snippet.channelTitle}</p>
                    <p>{viewCount(item.statistics.viewCount)} views</p>
                </div>
            </Link>
            )
        })}
    </div>
  )
}

export default Recommended