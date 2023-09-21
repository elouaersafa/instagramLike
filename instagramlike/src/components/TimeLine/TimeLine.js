import React ,{useState} from 'react';
import './TimeLine.css';
import Suggestion from './Suggestion';
import Post from'../Post/Post';
function TimeLine() {
    const [posts,setPosts]=useState([{
        user:"safa",
        postImage:"",
        likes:12,
        timestamp:"1d",

    },
    {
        user:"Julie",
        postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBxIxr7d5wrEdkIOHVjTqTHWUWAuqH5umrwWRzr-w&s",
        likes:120,
        timestamp:"2d",

    },
    {
        user:"Boris",
        postImage:"https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
        likes:120,
        timestamp:"2h",

    },
    {
        user:"Arnaud",
        postImage:"https://img.freepik.com/photos-premium/fond-nuit-magique-pleine-lune-comme-bel-arc-ciel-astronomie-conte-fees-nuit-etoilee_896648-660.jpg?w=740",
        likes:12,
        timestamp:"1h",

    }]);
    return (
        <>
        <div className="timeLine">
            <div className="timeLineLeft">
                <div className="timeLinePost">
                 {posts.map((post) => (
                    <Post user={post.user} postImage={post.postImage} like={post.likes} timestamp={post.timestamp}/>

                 ))}
                </div>
            </div>
            <div className="timeLineRight">
                <Suggestion/>
            </div>
        </div>
        </>
    );
}

export default TimeLine;