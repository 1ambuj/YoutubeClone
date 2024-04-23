import React, { useEffect, useRef, useState } from 'react'
import "./Feed.css"
import {API_KEY} from "../../data.js"
import { Link,  useLocation } from 'react-router-dom'
import {viewCount} from  "../../data.js"
import moment from 'moment'
import { useVideoContext } from '../../Contex/VideoContextProvider.jsx'

const getVideoLink = (item, categoryId) => {
  const videoId = typeof item.id === 'string' ? item.id : item.id.videoId
  let videoLink = `video/${videoId}`;

  if (categoryId) {
    videoLink += `?categoryId=${categoryId}`
  }

  return videoLink
}

const Feed = ({data,fetchVideos, isLoading}) => {
 
  
  const location = useLocation()

  const sentinelRef = useRef()
  
   const containerRef = React.useRef();
  // const handleScroll = async ()=>{
  //   const { scrollTop, clientHeight, scrollHeight} = containerRef.current;
  //   if(scrollTop + clientHeight >= scrollHeight -100 && !isLoading){
  //     console.log('insid ethe scri', )
  //     //  fetchVideos()

  //   }
  // }

  // useEffect(()=>{
  //   const container = containerRef.current
  //   container.addEventListener("scroll",handleScroll)

  //   return ()=>{
  //     container.removeEventListener('scroll', handleScroll);
  //   }
  // },[])

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.1, // Trigger when 10% of the sentinel is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting && !isLoading) {
          // Fetch more data when the sentinel enters the viewport
          fetchVideos();
        }
      });
    }, options);

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [isLoading, fetchVideos]);
  
  return (

       <div className="feed" ref={containerRef}>
     
        { data.map((item,index)=>{
          
            return (
                <Link to={getVideoLink(item, item.snippet?.categoryId)} className="card" key={index}>
                        <img src={item.snippet.thumbnails.medium.url} alt="" /> 
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{item.statistics? viewCount(item.statistics.viewCount):"1k"} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </Link>
            )
        })
       }
       {isLoading && <p>Loading...</p>}
       <div ref={sentinelRef} style={{ height: '10px' }} />
       </div>
    
  )
}

export default Feed

