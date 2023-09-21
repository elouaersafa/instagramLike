import React from 'react';
import'./Post.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import { Avatar } from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Post({user,postImage,likes,timestamp}) {
    return (
        <div className="post">
            <div className="header">
            <div className="headerAuthor">
            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
                {user} .{""} <span>{timestamp}</span>
            </div>
              <MoreHorizIcon/>
            </div>
            <div className="postImage">
                <img src={postImage} alt=""/>

            </div>
            <div className="footer">
                <div className="footerIcon">
                    <div className="main">
                      <FavoriteBorderIcon className="postIcon"/>
                      <ChatBubbleOutlineIcon className="postIcon"/>
                      <TelegramIcon className="postIcon"/>
                    </div>
                    <div className='save'>
                 <BookmarkBorderIcon className="postIcon"/>
                    </div>

                </div>
                Liked by {likes} people
            </div>
     
            
        </div>
    );
}

export default Post;