import styles from "./earlier.module.css";
import { useState} from "react";
const  Earlier =({earlierimage,earliername,earliertime})=>{
  const[isFollowing,setIsFollowing]=useState(false);
  const handleFollowClick= () => {
    setIsFollowing(prevState => !prevState);
  };
return(
    <div className={styles["detail2"]} >
    <div className={styles["person2"]}>
    <img src={earlierimage}/>
    </div>
      <div className={styles["name2"]}>
    <a><span>{earliername}</span>is on Instagram.</a>
    <br/>
    <a>and 11 other also follow them. <p>{earliertime}</p></a>
    </div>
    <div
      onClick={handleFollowClick}
      className={isFollowing ? styles.following : styles.follow}
    >
      {isFollowing ? 'Following' : 'Follow'}
    </div>

    </div>


)
}
export default Earlier;

