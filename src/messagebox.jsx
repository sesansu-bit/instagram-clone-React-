import styles from "./messagebox.module.css";
import { FaRegEdit } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaRegFaceSmile } from "react-icons/fa6";
import { PiMicrophoneBold } from "react-icons/pi";
import { TbPhoto } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { LiaFacebookMessenger } from "react-icons/lia";
import {useState} from "react";

const  Messagebox =()=>{
  
  const[showmessage,setshowmessage]=useState(null);
  let profiles=[{
    image:"https://tse4.mm.bing.net/th?id=OIP.sdFH8Obw484lRvZVSi6o_AHaFx&pid=Api&P=0&h=180",
    name:"me_robin...",
    duration:"7w"
  },{
    image:"https://tse2.mm.bing.net/th?id=OIP.Oqu68urPE4ssXbIgXDRL5AAAAA&pid=Api&P=0&h=180",
    name:"me_ayan...",
    duration:"9w"
  },{
    image:"https://tse3.mm.bing.net/th?id=OIP.68NL4wEUbqenNzY0UYCuWgHaJQ&pid=Api&P=0&h=180",
    name:"_Anuska...",
    duration:"2w"
  },{
    image:"https://www.modelmanagement.com/blog/wp-content/uploads/2020/09/mario-rodriguez.png",
    name:"me_riaz...",
    duration:"2w"
  },{
    image:"https://tse4.mm.bing.net/th?id=OIP.VptYq4W8whj1Mo05DCrCbAHaLG&pid=Api&P=0&h=180",
    name:"me_rahul...",
    duration:"7w"
  },{
    image:"https://tse3.mm.bing.net/th?id=OIP.5lAkNpWy0RrQfuc42dLWuwHaLH&pid=Api&P=0&h=180",
    name:"_lovely...",
    duration:"8w"
  },{
    image:"https://tse2.mm.bing.net/th?id=OIP.mR-AK0mxli56O74w_YrILQHaJ4&pid=Api&P=0&h=180",
    name:"_rashmika...",
    duration:"9w"
  },{
    image:"https://i.pinimg.com/736x/82/67/20/8267204c8ec12d3382a874cf2050825e.jpg",
    name:"me_sam6...",
    duration:"3w"
  }]

  const handleProfileClick = (profile) => {
    setshowmessage(profile);
  };
return(
  <>
<div className={styles["messengerfull"]}>
<div className={styles["messenger"]}>
<div className={styles["fix"]}>
<div className={styles["coverdiv"]}>
  <span className={styles["account"]}>seshansu_sekhar</span>
  <span className={styles["edit"]}><FaRegEdit  className={styles["editlogo"]}/></span>
</div>
<div className={styles["coverdiv2"]}>
  <span className={styles["mess"]}>Messages</span>
  <span><a>Requests</a></span>
</div>
  <div className={styles["eachdiv"]}>
 
  {profiles.map((profile) => (
        <div className={styles["top"]} key={profile.id} onClick={() => handleProfileClick(profile)} >
        <div className={styles["message"]}>
          <img src={profile.image}/>
        </div>
        <div className={styles["dist"]}>
        <pre>{profile.name}</pre>
        <p>Instagram user sent an attachment. {profile.duration}</p>
        </div>  
        </div>
        ))}   
</div>
</div>
</div>

{showmessage ?
<div className={styles["messengerright"]}>
<div className={styles["messengertop"]}>
<div className={styles["messengerprofile"]}>
<div className={styles["messageimage"]}> <img src={showmessage.image}/> </div>
<div className={styles["username"]}>{showmessage.name}</div> 
</div>

  <div className={styles["messengercall"]}>
  <div className={styles["call"]}><IoCallOutline className={styles["allicon"]}/></div>
  <div className={styles["videocall"]}><IoVideocamOutline className={styles["allicon"]}/></div>
  <div className={styles["detail"]}><IoInformationCircleOutline  className={styles["allicon"]} /></div>
  </div>
</div>

<div className={styles["messengertyping"]}>
<div className={styles["emoji"]}><FaRegFaceSmile className={styles["emojiicon"]} /></div>
<div className={styles["messengertext"]}> <input type="text" placeholder="Message..." /></div>
<div className={styles["inputicon"]}>
  <div className={styles["mike"]}><PiMicrophoneBold  className={styles["icons"]}/></div>
  <div className={styles["gallery"]}><TbPhoto className={styles["icons"]}/></div>
  <div className={styles["sendheart"]}><FaRegHeart className={styles["icons"]}/></div>
  </div>
</div>
</div>
:
<div className={styles["nomessage"]}>
<div className={styles["boxmessenger"]}><LiaFacebookMessenger className={styles["iconmessenger"]}/></div>
<p>your messages</p>
<a>send a message to start chat</a>
</div>

}
</div>

</>
)
}
export default Messagebox;

