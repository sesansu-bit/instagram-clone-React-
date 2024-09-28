import styles from "./postcontainer.module.css";
import Containerinside from "./containerinside.jsx";
import { useContext } from "react";
import {store} from "./socialstore.jsx";
const Postcontainer= () =>{
const {post} =useContext(store);

return(
<div className={styles["postcontainers"]}>
{post.map((posti)=>(<Containerinside key={posti.id} profilephoto={posti.profilephoto} postimage={posti.image} postname={posti.name} count={posti.likescount}></Containerinside>))} 
</div>

)
}
export default Postcontainer;