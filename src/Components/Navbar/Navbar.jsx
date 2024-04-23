import React, { useState } from 'react'
import "./Navbar.css"
import menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search.png"
import upload_icon from "../../assets/upload.png"
import more_icon from "../../assets/more.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/jack.png"
import { Link } from 'react-router-dom'
import { useVideoContext } from '../../Contex/VideoContextProvider'
import { useNavigate } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
  const navigate = useNavigate()
  const [formData , setFormData] = useState("")
  const { searchVideo,handleChangeSearchText  } = useVideoContext()

  function handleChange(e){
     setFormData(e.target.value)
  }

  function handleEnter(e) {
    if (e.key === 'Enter') {
      handleClick()
    } 
  }

  async function handleClick() {
    handleChangeSearchText (formData)

    await searchVideo(formData)
      navigate(`/search?t=${formData}`)
  }
  
   
  return (
    <nav className="flex-div">
       <div className="nav-left flex-div">
           <img src={menu_icon} alt="menuIcon" className="menu-icon" onClick={()=> setSidebar(prev => prev===false?true:false)}/>
           <Link to="/"><img src={logo} alt="logo" className='logo' /></Link>
       </div>
       <div className="nav-middle flex-div">
         <div className="search-box flex-div">
            <input type="text" placeholder="search" onKeyDown={handleEnter} onChange={handleChange}/>
            <img onClick={handleClick} src={search_icon} alt="searchIcon" />
         </div> 
       </div>
       <div className="nav-right flex-div">
          <img src={upload_icon} alt="" />
          <img src={more_icon} alt="" />
          <img src={notification_icon} alt="" />
          <img src={profile_icon} alt="" className='user-icon' />
       </div>
    </nav>
  )
}

export default Navbar