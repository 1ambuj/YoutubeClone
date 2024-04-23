
import React, { createContext, useContext,  useState } from "react"
import { API_KEY } from "../data"
import axios from "axios";
const VideoContext = createContext()

export default function VideoContextProvider({children}){
const [searchData, setSearchData] = useState([]);
 const [searchNextPageToken, setSearchNextPageToken] = useState({token:null , dataAvailable:true});
 const [data, setData] = useState([]);
 const [category, setCategory] = useState(0);
 const [pageToken, setPageToken] = useState({ token: null, dataAvailable: true });
 const [isLoading, setIsLoading] = useState(true);
 const [isSearchLoading, setIsSearchLoading] = useState(true);
 const [searchText, setSearchText] = useState("")

 const changeCategory =  (categoryId) => {
    if (categoryId === category) return
    setData([])
    setPageToken({ dataAvailable: true, token: null })
    setCategory(categoryId)
   }
    
   const handleChangeSearchText = async (newSearchText) => {
    if (!newSearchText || newSearchText === searchText) return;

    
    setSearchData([]);
    setSearchNextPageToken({ token: null, dataAvailable: true });

    
    setSearchText(newSearchText);

   
    await searchVideo(newSearchText);
};

const fetchData = async () => {

    try {
        let videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    
        if (pageToken.token) {
            videoListUrl += `&pageToken=${pageToken.token}`;
        }
        
        console.log({ len: data.length, data })
        // Fetch the data
       if(pageToken.dataAvailable){
        const response = await axios(videoListUrl);
        const data = await response.data;
    
        
        setData((prevData) => [...prevData, ...data.items]);
    
        setPageToken({
            token: data.nextPageToken,
            dataAvailable: !!data.nextPageToken
        });
    
        
        setIsLoading(false);
       }
    } catch(err) {
        console.error('Failed to fetch videos', err)
    }

};


const searchVideo = async (searchText) => {
  
    if (!searchText) return;
    
    setIsSearchLoading(true);
    
  
    let queries = `?part=snippet&q=${searchText}&maxResults=50&regionCode=US&key=${API_KEY}`;
    
    if (searchNextPageToken.token) {
        queries += `&pageToken=${searchNextPageToken.token}`;
    }

    const videoSearchUrl = `https://youtube.googleapis.com/youtube/v3/search` + queries;
    
    
    
    
    if (searchNextPageToken.dataAvailable) {
        
        const searchResponse = await fetch(videoSearchUrl);
        const videos = await searchResponse.json();
        const video1 = videos.items[0];

        // Fetch additional data for the first video
        const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video1.id.videoId}&key=${API_KEY}`;
        const response = await fetch(videoDetailsUrl);
        const detailsData = await response.json();
        console.log("details",detailsData)
        
        setSearchData((prevData) => [
            ...prevData,
            ...videos.items.map((d) => ({
                ...d,
                snippet: {
                    ...d.snippet,
                    categoryId: detailsData.items[0].snippet.categoryId
                }
            }))
        ]);
        
        if (!videos.nextPageToken) {
            setSearchNextPageToken({
                token: null,
                dataAvailable: false
            });
        } else {
            setSearchNextPageToken((prev) => ({ ...prev, token: videos.nextPageToken }));
        }
    }

    
    setIsSearchLoading(false);
};
return (
    <VideoContext.Provider value={{ data, searchData, category, changeCategory, setData, handleChangeSearchText ,searchVideo, fetchData, pageToken, isLoading, isSearchLoading }}>
        {children}
    </VideoContext.Provider>
);}
export const useVideoContext = () => useContext(VideoContext) ;
