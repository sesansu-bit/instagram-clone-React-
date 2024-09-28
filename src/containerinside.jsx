import styles from "./postcontainer.module.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaHeart, FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";
import { useState, useContext } from "react";
import {store} from "./socialstore.jsx";

const Containerinside = ({ postimage, profilephoto,postname, count }) => {
  const {handelRemove} =useContext(store);
  const [showLike, setShowLike] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isRemoveVisible, setIsRemoveVisible] = useState(false);

  const handleLike = () => {
    setShowLike(true);
    setIsLiked(true);

    setTimeout(() => {
      setShowLike(false);
    }, 1000);
  };

  const handleDotClick = () => {
    setIsRemoveVisible(!isRemoveVisible);
  };

  return (
    <div className={styles["postcontainer"]}>
  
     <div className={styles["postupperpartcover"]}>
     <div className={styles["postupperpart"]}>
     <div className={styles["postuppercircle"]}>
     <div className={styles["postinnercircle"]}>
     <img src={profilephoto} alt={profilephoto} />
     </div>
     </div>
     <div className={styles["postupname"]}>{postname}<a>.5h</a></div>
     <div className={styles["threedot"]}>
     <HiOutlineDotsHorizontal onClick={handleDotClick} className={styles["threedoticon"]} />
     </div>
     </div>
     {isRemoveVisible && <button className={styles["remove"]} onClick={()=>handelRemove(postname)}>Remove</button>}
     </div>

      <div className={styles["postphoto"]}>
        <img src={postimage} onDoubleClick={handleLike} alt="Post" />
        {showLike && (
          <div className={styles["postlike"]}>
            <FaHeart className={styles["postlikeicon"]} />
          </div>
        )}
        
      </div>
      <div className={styles["iconbox"]}>
        <div className={styles["love"]}>
          {isLiked ? ( <FaHeart className={styles["iconsize"]} style={{ color: 'red' }} /> ) : 
            (<FaRegHeart className={styles["iconsize"]} /> )}
        </div>
        <div className={styles["comment"]}>
          <FaRegComment className={styles["iconsize"]} />
        </div>
        <div className={styles["send"]}>
          <FaRegPaperPlane className={styles["iconsize"]} />
        </div>
        <div className={styles["bookmark"]}>
          <FaRegBookmark className={styles["iconsize"]} />
        </div>
      </div>
      <div className={styles["licomment"]}>
        <p>{count} likes...</p>
        <input placeholder="Add a comment" />
      </div>
    </div>
  );
};

export default Containerinside;

