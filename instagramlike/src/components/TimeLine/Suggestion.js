import React from 'react';
import { Avatar } from '@mui/material';
function Suggestion() {
    return (
      <div className="suggestions">
        <div className="suggTitle">Suggestions for you</div>
        <div className="suggUsernames">

        <div className="sugg_username">
        <div className="usernameLef">
            <span className="avatar">
                <Avatar>R</Avatar>
            </span>
            <div className="info">  
<span className="username">Safa_</span>
<span className="relation">New to Instagram</span>

            </div>
            </div>
            <button className="follow">
                Follow

            </button>
            </div>

            <div className="sugg_username">
        <div className="usernameLef">
            <span className="avatar">
                <Avatar>R</Avatar>
            </span>
            <div className="info">  
<span className="username">Safa_</span>
<span className="relation">New to Instagram</span>

            </div>
            </div>
            <button className="follow_butt">
                Follow</button>
            </div>
         <div className="sugg_username">
          <div className="usernameLef">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="info">
              <span className="username">redian_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow_butt">Follow</button>
        </div>


        </div>
            </div>

    );
}

export default Suggestion;