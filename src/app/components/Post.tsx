import { useState } from "react"
import Tab from "./Tab";
import { FaArrowUp, FaArrowDown, FaStar } from "react-icons/fa6";
import { CgDanger } from "react-icons/cg";

interface postTab {
    tabName: string,
    content: string
}

interface postData {
    tabs: postTab[],
    title: string,
    upvotes: number,
    downvotes: number,
    saved: number
}

interface props {
    postData: postData
}

const Post = ({postData}:props) => {
    const [currentTab, setCurrentTab] = useState(0);

    const formatTabContent = (content:string) => {
        return content;
    }

    const switchTab = (e:React.MouseEvent<HTMLElement>):void => {
        const clickedTab = e.currentTarget.innerText;
        postData.tabs.forEach((tab, ind) => {
            if (tab.tabName === clickedTab && clickedTab !== postData.tabs[currentTab].tabName) {
                setCurrentTab(ind);
            }
        });
    }
    
    return (
        <section>
            <h1>{postData.title}</h1>
            <ul>
                {postData.tabs.map((tab, ind) => <Tab switchTab={switchTab} tabName={tab.tabName} key={ind} />)}
            </ul>
            <div>
                <p>{formatTabContent(postData.tabs[currentTab].content)}</p>
            </div>
            <ul>
                <li><FaArrowUp /><span>{postData.upvotes}</span></li>
                <li><FaArrowDown /><span>{postData.downvotes}</span></li>
                <li><FaStar /><span>{postData.saved}</span></li>
                <li><CgDanger /><span>Report post</span></li>
            </ul>
        </section>
    )
}

export default Post