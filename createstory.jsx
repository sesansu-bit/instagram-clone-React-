import styles from "./createstory.module.css";
import {useRef} from "react";
import { RxCross1 } from "react-icons/rx";
import { useContext } from "react";
import {store} from "./socialstore.jsx";
const Createstory= () =>{
const {addstory} =useContext(store);
const {setcreatestoryshow} =useContext(store);

const storyinvisible =()=>{
setcreatestoryshow(false); 
}
const profileref=useRef();
const storyref=useRef();
const nameeref=useRef();

const handeladdstory=(event)=>{
event.preventDefault(); 
const Image=profileref.current.value;
const storycontent=storyref.current.value.split(",");
const Name=nameeref.current.value;
profileref.current.value="";
storyref.current.value="";
nameeref.current.value="";
addstory(Image,Name,storycontent);
}

return(
        <div className={styles["content"]} >
        <div className={styles["cross1"]}><RxCross1 className={styles["cross1icon"]} onClick={storyinvisible}/></div>
        <div className={styles["content3"]}>
         <p className={styles["upload1"]}>ADD STORY</p>
        <form onSubmit={handeladdstory}>
        <div><input ref={profileref}  type="text" placeholder="Enter your profile image address"/></div>
        <br/>
        <div><input ref={storyref} type="text" placeholder="enter your story image address"/></div> 
        <br/>
        <div><input ref={nameeref} type="text" placeholder="Enter your name"/></div>
        <br/>
        <div><input className={styles["submission"]}type="submit"/></div> 
        </form> 
        </div>
        </div>
)
}
export default Createstory;