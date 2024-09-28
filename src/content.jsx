import styles from "./content.module.css";
import Storybar from "./storybar.jsx";
import Postcontainer from "./postcontainer.jsx";
import { useContext } from "react";
import { store } from "./socialstore.jsx";
const Content = () => {
  const { story } = useContext(store);
  const { post } = useContext(store);
  return (
    <div className={styles["content"]}>
      <Storybar story={story}></Storybar>
      <Postcontainer post={post}></Postcontainer>
    </div>
  );
};
export default Content;
