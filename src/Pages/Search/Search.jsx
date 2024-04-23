import React, { useEffect } from 'react'
import Feed from '../../Components/Feed/Feed'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useVideoContext } from '../../Contex/VideoContextProvider'
import { useSearchParams } from 'react-router-dom'




const Search = ({sidebar}) => {
    const {searchData, searchVideo, isSearchLoading}  = useVideoContext()
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get('t');
    useEffect(()=>{
        // if (!searchData.length) searchVideo(searchText) 
        if (searchText) {
          searchVideo(searchText);
        }
    },[searchText])

   
  return (
    <div>
        <Sidebar sidebar={sidebar} />
       <div className={`container ${sidebar?"":'large-container'}`}>
         <Feed data={searchData} fetchVideos={() => searchVideo(searchText)} isLoading={isSearchLoading}/>
      </div>
    </div>
  )
}

export default Search