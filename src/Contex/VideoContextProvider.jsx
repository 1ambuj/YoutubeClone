import React, { createContext, useContext, useEffect, useState } from "react"
import { API_KEY } from "../data"
const VideoContext = createContext()

export default function VideoContextProvider({children}){

    const [data , setData] = useState([])
    const [category , setCategory] = useState(0)
    const [m]

    const fetchData = async () =>{
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2C%20statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_url).then(res => res.json()).then(data => setData(data.items))
    }

    const searchVideo = async (searchText) => {
        if (!searchText) return
        // TODO: Fetch the data and update the state
        const VideoSearchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=%20snippet&q=${searchText}&maxResults=50&regionCode=US&key=${API_KEY} `
        await fetch(VideoSearchUrl).then(res => res.json()).then(data => {
            setData(data.items)
        })
    }

    useEffect(()=>{
        fetchData()
    },[category])

    useEffect(()=>{
        searchVideo() 
    },[])
    
    return (
         <>
         <VideoContext.Provider  value={{ data, category, setCategory, setData, searchVideo }}>
              {children}
         </VideoContext.Provider>
         </>
    )
}

export const useVideoContext = () => useContext(VideoContext)