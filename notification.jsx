import styles from "./notification.module.css";
import Earlier from "./earlier";
import { useState} from "react";
const Notificationbar =()=>{

  const[isFollow,setIsFollow]=useState(false);
  const handleFollow= () => {
    setIsFollow(prev => !prev);
  };
    let earlier=[{
      image:"https://i.pinimg.com/736x/82/67/20/8267204c8ec12d3382a874cf2050825e.jpg",
      name:"me_sam6...",
      duration:"3w"
    },{
      image:"https://tse3.mm.bing.net/th?id=OIP.68NL4wEUbqenNzY0UYCuWgHaJQ&pid=Api&P=0&h=180",
      name:"_Anuska...",
      duration:"2w"
    },{
      image:"https://www.modelmanagement.com/blog/wp-content/uploads/2020/09/mario-rodriguez.png",
      name:"me_riaz...",
      duration:"2w"
    },{
      image:"https://tse2.mm.bing.net/th?id=OIP.mR-AK0mxli56O74w_YrILQHaJ4&pid=Api&P=0&h=180",
      name:"_rashmika...",
      duration:"9w"
    },{
      image:"https://tse4.mm.bing.net/th?id=OIP.VptYq4W8whj1Mo05DCrCbAHaLG&pid=Api&P=0&h=180",
      name:"me_rahul...",
      duration:"7w"
    },{
      image:"https://tse2.mm.bing.net/th?id=OIP.Oqu68urPE4ssXbIgXDRL5AAAAA&pid=Api&P=0&h=180",
      name:"me_ayan...",
      duration:"9w"
    },{
      image:"https://tse3.mm.bing.net/th?id=OIP.5lAkNpWy0RrQfuc42dLWuwHaLH&pid=Api&P=0&h=180",
      name:"_lovely...",
      duration:"8w"
    },{
      image:"https://tse4.mm.bing.net/th?id=OIP.sdFH8Obw484lRvZVSi6o_AHaFx&pid=Api&P=0&h=180",
      name:"me_robin...",
      duration:"7w"
    },]
return(
    <div className={styles["notification"]}>
    <p>Notifications</p>
    <div className={styles["week"]}><p>This Month</p></div>
    <div className={styles["detail1"]} >
    <div className={styles["person1"]}>
        <img src="http://www.telegraph.co.uk/content/dam/fashion/2015-%2007/July17/lucky-blue-smith-xlarge.jpg"/>
    </div>
      <div className={styles["name1"]}>
    <a><span>_sahaj4... </span>is on Instagram.</a>
    <br/>
    <a>and 11 other also follow them.  <p>1d</p></a>
    </div>
   
    <div
      onClick={handleFollow}
      className={isFollow ? styles.following : styles.follow}
    >
      {isFollow ? 'Following' : 'Follow'}
    </div>
    </div>
    <div className={styles["space"]}></div>
    <div className={styles["early"]}><p>Earlier</p></div>
    {earlier.map((earlieri)=>(<Earlier key={earlieri.id} earlierimage={earlieri.image} earliername={earlieri.name} earliertime={earlieri.duration}></Earlier>))} 
    
</div>
)
}
export default Notificationbar;


