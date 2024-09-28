import styles from "./storybar.module.css";
import { useState,useEffect,useContext} from "react";
import { FaCirclePlus } from "react-icons/fa6";
import {store} from "./socialstore.jsx";
import Storyinside from "./storyinside.jsx";

const Storybar= () =>{
 const {story} =useContext(store);
 const {setcreatestoryshow} =useContext(store);
 const handelCreateStory =()=>{
  setcreatestoryshow(true);
  }

const [storyshow,setstoryshow]=useState(null);

const handelStoryClick=(storyi)=>{
    setstoryshow(storyi);
}
const handelCloseStory=()=>{
    setstoryshow(null);
}
useEffect(() => {
    if (storyshow) {
      const timer = setTimeout(() => {
        setstoryshow(null); 
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [storyshow]);

return(
<>
<div className= {styles["storylayer1"]}>
<div className= {styles["storylayer2"]} >
<div className= {styles["addupper"]}>
                <div className= {styles["addinner"]} >      
                <img alt="Company Logo"src="https://cdn.fstoppers.com/styles/full/s3/photos/2017/10/99a47e65d8ac4ad0aba8be4a6cc4d236.jpg?itok=3gbhsxt-" onClick={ ()=>handelstoryclick(storyi)}/>
                <div className= {styles["plus"]}><FaCirclePlus className= {styles["plusicon"]} onClick={handelCreateStory}/></div>
                </div>
                <p>Add story</p>
                </div>
{story.map((storya)=>(<Storyinside key={storya.id} handelStoryClick={handelStoryClick} storya={storya}></Storyinside>))} 
</div>
</div>

{storyshow && 
( 
   <div className= {styles["storycover"]} onClick={ ()=>handelCloseStory()}>
    <div className= {styles["instalogo"]}> <img src="https://s-media-cache-ak0.pinimg.com/originals/d5/1d/09/d51d097fbbd5cdc277d80c605ad1c455.png"/></div>
    <div className= {styles["storyimage"]}>
    {storyshow.storycontent.map((content) => (
        <img src={content}  alt="Company Logo"/>
    ))}
    </div>            
      </div>    
)}
</>
)
}
export default Storybar;
