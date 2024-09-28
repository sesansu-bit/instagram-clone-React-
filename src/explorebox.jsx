import styles from "./explorebox.module.css";
const  Explorebox =({exploreimage} )=>{
return(    
<div className={styles["eachimg"]}><img src={exploreimage}/></div>
)
}
export default Explorebox;