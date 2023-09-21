import React from 'react';
import {Link} from 'react-router-dom';
import './Sidenav.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Sidenav() {
    return (
        <div className="sideNav">
           <img className= "logo" src="https://www.christinasandsengen.com/wp-content/uploads/2014/09/instagram-logo-black-on-white.png" alt=""/>
       <div className="sidenavButtons">

        <button className="sidenav_button">
       
        <HomeIcon/>
<span> Home</span>  
</button>
       
        <button className="sidenav_button">
        <SearchIcon/>
<span> Search</span>  
        </button>

        <div className="sidenav_button">
        <ExploreIcon/>
<span> Explore</span>  
        </div>
        <div className="sidenav_button">
        <SlideshowIcon/>
<span> Reels</span>  
        </div>
        <div className="sidenav_button">
        <ChatIcon/>
<span> Messages</span>  
        </div>
        <div className="sidenav_button">
        <FavoriteBorderIcon/>
<span> Notifications</span>  
        </div>
        <button className="sidenav_button" >
        <AddCircleOutlineIcon/>
<span> Create</span>  
        </button>

       </div>
       <div className="sidenavMore">
       <button className="sidenav_button">
        <MenuIcon/>
        <span>More</span>
        </button>
       </div>
       
        </div>
    );
}

export default Sidenav;