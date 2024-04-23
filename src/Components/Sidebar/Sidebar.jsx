import React from 'react'
import "./Sidebar.css"
import home from "../../assets/home.png"
import sports from "../../assets/sports.png"
import entertainment from "../../assets/entertainment.png"
import game_icon from "../../assets/game_icon.png"
import tech from "../../assets/tech.png"
import music from "../../assets/music.png"
import automobiles from "../../assets/automobiles.png"
import blogs from "../../assets/blogs.png"
import news from "../../assets/news.png"
import jack from "../../assets/jack.png"
import simon from "../../assets/simon.png"
import tom from "../../assets/tom.png"
import megon from "../../assets/megan.png"
import cameron from "../../assets/cameron.png"
import { useVideoContext } from '../../Contex/VideoContextProvider'

const Sidebar = ({sidebar}) => {
  const { category, changeCategory } = useVideoContext()
  
  return (
    <div className={`sidebar ${sidebar? "":"small-sidebar"}`}>
        <div className='sortcut-links'>
           <div className={`side-link ${category==0?"active":""}`} onClick={()=>changeCategory(0)}>
              <img src={home} alt="" /><p>Home</p>
           </div> 
           <div className={`side-link ${category==20?"active":""}`} onClick={()=>changeCategory(20)}>
              <img src={game_icon} alt="" /><p>Game</p>
           </div>
           <div className={`side-link ${category==2?"active":""}`} onClick={()=>changeCategory(2)}>
              <img src={automobiles} alt="" /><p>Automobiles</p>
           </div> 
           <div className={`side-link ${category==17?"active":""}`} onClick={()=>changeCategory(17)}>
              <img src={sports} alt="" /><p>Sports</p>
           </div> 
           <div className={`side-link ${category==24?"active":""}`} onClick={()=>changeCategory(24)}>
              <img src={entertainment} alt="" /><p>Entertainment</p>
           </div> 
           <div className={`side-link ${category==28?"active":""}`} onClick={()=>changeCategory(28)}>
              <img src={tech} alt="" /><p>Technology</p>
           </div> 
           <div className={`side-link ${category==10?"active":""}`} onClick={()=>changeCategory(10)}>
              <img src={music} alt="" /><p>Music</p>
           </div> 
           <div className={`side-link ${category==22?"active":""}`} onClick={()=>changeCategory(22)}>
              <img src={blogs} alt="" /><p>Blogs</p>
           </div> 
           <div className={`side-link ${category==25?"active":""}`} onClick={()=>changeCategory(25)}>
              <img src={news} alt="" /><p>News</p>
           </div> 
           <hr /> 
        </div>
        <div className="subscribed-list">
            <h3 className="hed">Subscribed</h3>
             <div className="side-link">
                <img src={jack} alt="" /><p>PewDiePie</p>
             </div>
             <div className="side-link">
                <img src={simon} alt="" /><p>MrBeast</p>
             </div>
             <div className="side-link">
                <img src={tom} alt="" /><p>Justin Bieber</p>
             </div>
             <div className="side-link">
                <img src={megon} alt="" /><p>5-Minute Crafts</p>
             </div>
             <div className="side-link">
                <img src={cameron} alt="" /><p>Nas Daily</p>
             </div>
        </div>
    </div>
  )
}

export default Sidebar