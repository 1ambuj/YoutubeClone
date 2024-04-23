import React, { useEffect, useState } from 'react'
import "./PlayVideo.css"
import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import user_profile from "../../assets/user_profile.jpg"
import { useParams } from 'react-router-dom'
import { API_KEY, viewCount } from '../../data'
import moment from 'moment'
import ReactPlayer from 'react-player'

const PlayVideo = () => {
    const  [apiData , setApiData] = useState(null)
    const [channelData , setChannelData] = useState(null);
    const [comment , setComment] = useState([]);

    const param = useParams()
    
  
    const fetchVideoData = async () =>{
        //Fetching Videos Data 
       const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2C%20statistics&id=${param.videoId}&key=${API_KEY}`
       const response = await fetch(videoDetails_url)
       const data = await response.json()
       setApiData(data.items[0])
    }
    const fetchOtherData = async ()=>{
        //fetching chanel data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2C%20statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]))
        const CommentData_url = ` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${param.videoId}&key=${API_KEY}`
        await fetch(CommentData_url).then(res => res.json()).then(data => setComment(data.items))

    }

    useEffect(() => {
        fetchVideoData()
    }, [param.videoId])

    useEffect(()=>{
        if (apiData) {
            fetchOtherData()
        }
    },[apiData])

    const render = comment.map((item,index)=>{
        return(
        <div key={index} className="comment">
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" /> 
            <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                <div className="comment-action">
                    <img src={like} alt="" /> 
                    <span>{viewCount(item.snippet.topLevelComment.snippet.likeCount)}</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        )
    })
  
  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video>  */}
      {/* <iframe  src={`https://www.youtube.com/embed/${param.videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" fullScreen></iframe> */}
      <div className="video-container">
        <ReactPlayer width="100%" height="100%" style={{ margin: '0 auto' }} controls url={`https://www.youtube.com/watch?v=${param.videoId}`} />
      </div>
      <h3>{apiData?apiData.snippet.title: "Title here"}</h3>
      <div className="play-video-info">
          <p>{apiData?viewCount(apiData.statistics.viewCount):"16k"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow:".3days ago"}</p>
           <div className="prop">
              <span><img src={like} alt="" />{apiData? viewCount(apiData.statistics.likeCount): "155k"}</span>
              <span><img src={dislike} alt="" />{apiData? viewCount(apiData.statistics.disLikeCount): 10}</span>
              <span><img src={share} alt="" />Share</span>
              <span><img src={save} alt="" />Save</span>
           </div>
         </div>
         <hr />
         <div className="publisher">
              <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" /> 
              <div>
                 <p>{apiData?apiData.snippet.channelTitle:""}</p>
                 <span>{channelData?viewCount(channelData.statistics.subscriberCount):"1M" } Subscribers</span>
              </div> 
              <button>Subscribe</button>
           </div>
           <div className="vid-description">
                <p>{apiData? apiData.snippet.description.slice(0,300): ""}</p>
                <hr />
                <h4>{apiData? viewCount(apiData.statistics.commentCount):20} Comments</h4>
                {render}
            </div>
    </div>
  )
}

export default PlayVideo