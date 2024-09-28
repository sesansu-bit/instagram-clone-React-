import styles from "./searchbar.module.css";
import { useContext } from "react";
import {store} from "./socialstore.jsx";

const Searchbar =()=>{
const {searchshow} =useContext(store);
return(
<div className={`${styles.searchbox} ${searchshow && styles.expand }`}>
<br/> 
<p>Search</p>
<input type="text" placeholder="Search"/>
<div className={styles["line"]}> </div> 
<div className={styles["recent"]}>Recent</div>
<div className={styles["nosearch"]}>No recent searches.</div>
</div>
)
};
export default Searchbar;

   