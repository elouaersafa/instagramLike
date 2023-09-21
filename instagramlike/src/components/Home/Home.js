import React from 'react';
import Sidenav from '../sidenav/Sidenav';
import TimeLine from '../TimeLine/TimeLine';
import './Home.css'
function Home() {
    return (
        <div className="home">
          <div className="homeNav">
<Sidenav/>
          </div>
          <div className="homeTimeLine">
<TimeLine/>
          </div>
        </div>
    );
}

export default Home;