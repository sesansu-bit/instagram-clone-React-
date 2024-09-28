import styles from "./explorebar.module.css";
import Explorebox from"./explorebox.jsx";
const  Explorebar =()=>{
    let explore=[{
        id:1,
        image:"http://www.liveenhanced.com/wp-content/uploads/2018/04/male-model-poses-26.jpg"
      },{
        id:2,
        image:"http://www.liveenhanced.com/wp-content/uploads/2018/04/male-model-poses-4.jpg"
      },{
        id:3,
        image:"https://jooinn.com/images/portrait-of-young-woman.jpg"
      },{
        id:4,
        image:"https://petapixel.com/assets/uploads/2017/08/IMG_0513.jpg"
  },{
     id:5,
        image:"https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-lucky.jpg"
      },{
        id:6,
        image:"https://i.pinimg.com/originals/a9/53/58/a953584354529f8f95b7f4b9cdc40e98.jpg"
      },{
        id:7,
        image:"https://c.wallhere.com/photos/b6/2a/Martin_Strauss_women_500px_model_face_portrait-3430.jpg!d"
      },{
        id:8,
        image:"https://i0.hippopx.com/photos/218/918/519/model-beautiful-women-s-people-preview.jpg"
      },{
        id:9,
        image:"https://i.pinimg.com/originals/f4/50/0c/f4500c6137c7ea48db2abb101aead236.jpg"
      },{
        id:10,
        image:"https://go-talent.co.uk/sites/default/files/shutterstock_159456308_0.jpg"
      },{
        id:11,
        image:"https://media-manager.starsinsider.com/gallery/1080/na_586fcbdf26e45.jpg"
      },{
        id:12,
        image:"https://i.pinimg.com/originals/e2/85/75/e28575d07f8bb94ccc8dc92aeab210a8.jpg"
  },{
    id:13,
        image:"https://i.pinimg.com/originals/89/ab/6f/89ab6fc638c516b0138d18e7626d66e1.jpg"
      },{
        id:14,
        image:"https://i.pinimg.com/originals/25/2b/8c/252b8cde44a0d9f849b62bc69faf54dd.jpg"
      },{
        id:15,
        image:"https://i.pinimg.com/originals/30/a6/39/30a6394b4194665e57d50a9cba9d398b.jpg"
      },{
        id:16,
        image:"http://2.bp.blogspot.com/-AO6y2ccJnKE/VRRjHZObVDI/AAAAAAAAE0k/zeHKOZ_xNwI/s1600/470012_412029115494939_962721549_o.jpg"
      },{
        id:17,
        image:"https://www.apetogentleman.com/wp-content/uploads/2021/12/malemodelsinstagram3.jpg"
      },{
        id:18,
        image:"https://i.pinimg.com/originals/c8/cf/06/c8cf0644ad77bf4ff4c652160fbe3567.jpg"
      }
    ]
    return(
        <div className={styles["Explore"]}>
     {explore.map((explorei)=>(<Explorebox key={explorei.id} exploreimage={explorei.image} ></Explorebox>))}
     </div>
    )
};
    export default Explorebar;