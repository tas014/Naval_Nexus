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
        <section className="w-4/5 m-auto mt-10 flex flex-wrap justify-between content-center text-slate-200 pt-4 pb-4">
            <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
            <ul className="mt-5 flex justify-end">
                {postData.tabs.map((tab, ind) => <Tab switchTab={switchTab} tabName={tab.title} key={ind} selected={currentTab==ind} />)}
            </ul>
            <div className="min-h-70 bg-slate-200/80 rounded p-5 w-full">
                <p className="whitespace-pre-wrap text-slate-800">{formatTabContent(postData.tabs[currentTab].content)}</p>
            </div>
            <ul className="flex mt-4">
                <li className="cursor-pointer flex mr-4 justify-center content-center flex-wrap"><FaArrowUp className={`mr-1 text-l font-bold ${upvoted? "text-orange-500 hover:text-slate-200" : "hover:text-orange-500"}`}onClick={()=> handleVotesInteraction(true)}/><span>{postData.upvotes}</span></li>
                <li className="cursor-pointer flex mr-4 justify-center content-center flex-wrap"><FaArrowDown className={`mr-1 text-l font-bold ${downvoted? "text-blue-500 hover:text-slate-200" : "hover:text-blue-500"}`} onClick={()=> handleVotesInteraction(false) }/><span>{postData.downvotes}</span></li>
                <li className="flex mr-4 justify-center content-center flex-wrap text-red-500"><CgDanger className="mr-1 text-xl" /><span>Report post</span></li>
            </ul>
        </section>;
    } else {
        content = 
        <section className="w-4/5 h-screen w-4/5 m-auto mt-20">
            <div className="bg-gray-400 rounded w-1/3 p-5 mb-3"></div>
            <div className="bg-gray-400 rounded w-full p-5 mb-3 min-h-60">
                <div className="bg-gray-200 rounded w-7/8 mb-3 mr-5 ml-4 p-4" />
                <div className="bg-gray-200 rounded w-7/8 mb-3 mr-5 ml-4 p-4" />
                <div className="bg-gray-200 rounded w-6/8 mb-3 mr-5 ml-4 p-4" />
                <div className="bg-gray-200 rounded w-7/8 mb-3 mr-5 ml-4 p-4" />
                <div className="bg-gray-200 rounded w-7/8 mb-3 mr-5 ml-4 p-4" />
                <div className="bg-gray-200 rounded w-7/8 mb-3 mr-5 ml-4 p-4" />
                <div className="bg-gray-200 rounded w-6/8 mb-3 mr-5 ml-4 p-4" />
                <div className="bg-gray-200 rounded w-1/5 mb-3 mr-5 ml-4 p-4" />
            </div>
            <div className="bg-gray-400 rounded w-1/6 p-5 mb-3"></div>
        </section>
    }      
    
    return (
        <>
            {content}
        </>
    )
}

export default Post