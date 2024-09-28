import styles from "./createpost.module.css";
import { useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import { useContext } from "react";
import { store } from "./socialstore.jsx";
const Createpost = () => {
  const { additem } = useContext(store);
  const { setcreatepostshow } = useContext(store);
  const handelinvisible = () => {
    setcreatepostshow(false);
  };
  const dataref = useRef();
  const nameref = useRef();
  const likeref = useRef();
  const profileref = useRef();

  const handeladd = (event) => {
    event.preventDefault();
    const image = dataref.current.value;
    const name = nameref.current.value;
    const likescount = likeref.current.value;
    const profilephoto = profileref.current.value;
    dataref.current.value = "";
    nameref.current.value = "";
    likeref.current.value = "";
   profileref.current.value="";

    additem(image, name, likescount, profilephoto);
  };

  return (
    <div className={styles["content1"]}>
      <div className={styles["cross"]}>
        <RxCross1 className={styles["crossicon"]} onClick={handelinvisible} />
      </div>
      <div className={styles["content2"]}>
        <p className={styles["upload"]}>ADD POST</p>
        <form onSubmit={handeladd}>
          <div>
            <input
              ref={dataref}
              type="text"
              placeholder="Enter post image address"
            />
          </div>
          <br />
          <div>
            <input
              ref={profileref}
              type="text"
              placeholder="Enter your profile image address"
            />
          </div>
          <br />
          <div>
            <input ref={nameref} type="text" placeholder="enter your Name" />
          </div>
          <br />
          <div>
            <input ref={likeref} type="text" placeholder="Enter no. of likes" />
          </div>
          <br />
          <div>
            <input className={styles["add"]} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Createpost;
