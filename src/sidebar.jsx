import styles from "./Sidebar.module.css";
import { IoIosHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaCompass } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useContext } from "react";
import {store} from "./socialstore.jsx";
import { Link } from "react-router-dom";
const Sidebar=() =>{

const {setsearchshow} =useContext(store);
const {searchshow} =useContext(store);
const {notificationshow} =useContext(store);
const {setnotificationshow} =useContext(store); 
const {setcreatepostshow} =useContext(store);
   const handelsearch =()=>{
    setsearchshow(!searchshow);
   }
   const handelnotification =()=>{
    setnotificationshow(!notificationshow);
   }
   const handelcreatepost =()=>{
   setcreatepostshow(true);
   }
return(
<div className={styles["sidebar"]}>
<div className= {styles["mainlogo"]} ><img  alt="Company Logo" src="https://thumbs.dreamstime.com/b/print-204012264.jpg"/></div>      
<div className= {styles["sidecontainer"]} >

<Link className={styles["link"]} to="/">
<div className={styles["homecontainer"]} > 
<div><IoIosHome className={styles["icon1"]} /></div>
<div className={styles["Text1"]}>Home</div>
</div>
</Link>

<div className={styles["searchcontainer"]} onClick={handelsearch}> 
<div><FaSearch  className={styles["icon2"]}/></div>
<div className={styles["Text2"]}>Search</div>
</div>
<Link className={styles["link"]} to="/explore">
<div className={styles["explorecontainer"]}> 
<div><FaCompass className={styles["icon3"]}/></div>
<div className={styles["Text3"]}>Explore</div>
</div>
</Link>
<Link className={styles["link"]} to="/message">
<div className={styles["messagescontainer"]}> 
<div><FaRegPaperPlane className={styles["icon4"]}/></div>
<div className={styles["Text4"]}>Messages</div>
</div>
</Link>
<div className={styles["notificationscontainer"]} onClick={handelnotification}> 
<div><FaHeart className={styles["icon5"]}/></div>
<div className={styles["Text5"]}>Notifications</div>
</div>
<div className={styles["createcontainer"]} onClick={handelcreatepost}> 
<div><BsFillPlusSquareFill className={styles["icon6"]}/></div>
<div className={styles["Text6"]}>Create post</div>
</div>
</div>
</div>
);

}
export default Sidebar;