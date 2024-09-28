import styles from "./storyinside.module.css";
const Storycontainer= ({handelStoryClick,storya}) =>{
return(
<>
<div className= {styles["circleup"]}>
         <div className= {styles["circlein"]} >      
                <img alt="Company Logo"src={storya.Image} onClick={ ()=>handelStoryClick(storya)}/>
                </div>   
                <p>{storya.Name}</p>
 </div>
</>
)
}
export default Storycontainer;





