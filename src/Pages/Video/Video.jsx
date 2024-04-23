import React from 'react'
import "./Video.css"
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import {useParams, useSearchParams} from "react-router-dom"

const Video = () => {
  const param = useParams()
  const [searchParams] = useSearchParams()
  console.log('search', searchParams)
  return (
    <div className="play-container">
      <PlayVideo video={param.videoId}/>
      <Recommended category={searchParams.get('categoryId')} />
    </div>
  )
}

export default Video