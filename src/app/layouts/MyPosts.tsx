import Tab from "../components/Tab"
import PostCard from "../components/PostCard";
import { useState, useEffect } from "react";

const MyPosts = () => {
  const [currentTab, setCurrentTab] = useState(true);
  const [userPosts, setUserPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);

  const switchTab = (e:React.MouseEvent<HTMLElement>):void => {
    if (e.currentTarget.innerText !== "Saved Posts" && currentTab) {
      setCurrentTab(false);
    }
    if (e.currentTarget.innerText === "Saved Posts" && !currentTab) {
      setCurrentTab(true);
    }
  }

  return (
    <section>
        <div>
            <Tab switchTab={switchTab} tabName="Saved Posts" key={1} />
            <Tab switchTab={switchTab} tabName="My Posts" key={2} />
        </div>
        <div>
            {currentTab ? userPosts.map((post, ind)=> <PostCard art={post} key={ind} />) : savedPosts.map((post, ind)=> <PostCard art={post} key={ind} />)}
        </div>
    </section>
  )
}

export default MyPosts