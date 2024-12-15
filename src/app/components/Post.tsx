import { useState } from "react";
import Tab from "./Tab";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { CgDanger } from "react-icons/cg";

interface postTab {
    title: string,
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
    postData: postData,
    updateVotesAdd: (direction:boolean) => void,
    updateVotesRemove: (direction:boolean) => void
}

const Post = ({postData, updateVotesAdd, updateVotesRemove}:props) => {
    const [currentTab, setCurrentTab] = useState(0);
    const [upvoted, setUpvoted] = useState(false);
    const [downvoted, setDownvoted] = useState(false);


    const formatTabContent = (content:string) => {
        return content;
    }

    const switchTab = (e:React.MouseEvent<HTMLElement>):void => {
        const clickedTab = e.currentTarget.innerText;
        postData.tabs.forEach((tab, ind) => {
            if (tab.title === clickedTab && clickedTab !== postData.tabs[currentTab].title) {
                setCurrentTab(ind);
            }
        });
    }

    const handleVotesInteraction = (direction:boolean) => {
        if (direction) {
            if (!upvoted) {
                updateVotesAdd(direction)
            } else {
                updateVotesRemove(direction)
            }
            setUpvoted(!upvoted);
        } else {
            if (!downvoted) {
                updateVotesAdd(direction);
            } else {
                updateVotesRemove(direction);
            }
            setDownvoted(!downvoted);
        }
    }

    let content;
    if(postData != null) { content = 
        <section>
            <h1>{postData.title}</h1>
            <ul>
                {postData.tabs.map((tab, ind) => <Tab switchTab={switchTab} tabName={tab.title} key={ind} />)}
            </ul>
            <div>
                <p>{formatTabContent(postData.tabs[currentTab].content)}</p>
            </div>
            <ul>
                <li><FaArrowUp onClick={()=> handleVotesInteraction(true)}/><span>{postData.upvotes}</span></li>
                <li><FaArrowDown onClick={()=> handleVotesInteraction(false) }/><span>{postData.downvotes}</span></li>
                <li><CgDanger /><span>Report post</span></li>
            </ul>
        </section>;
    } else {
        content = 
        <section className="w-4/5 h-screen w-4/5 m-auto">
            <div className="bg-gray-400 rounded w-full p-5"></div>
            <div className="bg-gray-400 rounded w-full p-5"></div>
            <div className="bg-gray-400 rounded w-full p-5"></div>
            <div className="bg-gray-400 rounded w-full p-5"></div>
            <div className="bg-gray-400 rounded w-full p-5"></div>
        </section>
    }      
    
    return (
        <>
            {content}
        </>
    )
}

export default Post