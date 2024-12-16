import React from 'react'
import { useState } from 'react';

const PostContent = ({ setContent }) => {
    const [tabs, setTabs] = useState([{ title: "General", content: "" }]);
    const [currentTab, setCurrentTab] = useState(0);
    const newTabRef = document.getElementById('tabName')?.value;

    const validateContent = () => {
        const postContent = document.getElementById("post_content").innerText;
        setContent(tabs);
    }

    const addTab = () => {
        const newTabName = document.getElementById('tabName')?.value;
        if (newTabName != "" && newTabName.length <= 20) {
            const newTabs = [...tabs];
            newTabs.push({
                title: newTabName,
                content: ""
            })
            setTabs(newTabs);
            toggleModal();
        } else {
            document.getElementById('tab_creation_error').innerText = "Tab name cannot be empty or longer than 20 characters."
        }
    }

    const toggleModal = () => {
        const cont = document.querySelector('.modal');
        cont.classList.toggle('hidden');
        document.getElementById('tab_creation_error').innerText = null;
    }

    const swapTab = e => {
        const ind = e.target.getAttribute('pos');
        setCurrentTab(ind);
        document.getElementById('post_content').value = tabs[ind].content;
    }

    let timeoutID;
    const updateTabContent = e => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            const newTabs = [...tabs];
            newTabs[currentTab].content = e.target.value;
            setTabs(newTabs);
        }, 300);
    }

    return (
        <div className='min-w-full relative flex flex-col p-4'>
            <div className='modal hidden w-full h-full absolute top-0 left-0 bg-slate-900/75 flex justify-center content-center flex-wrap'>
                <div className='flex justify-center content-center flex-wrap flex-col'>
                    <div className='flex flex-col mb-4'>
                        <label className='text-xl font-bold text-slate-300 mb-3' htmlFor="tabName">Tab Name</label>
                        <span className='text-red-400' id='tab_creation_error'></span>
                        <input className='p-2' type="text" id='tabName' />
                    </div>
                    <div>
                        <button className='w-fit self-end pr-5 pl-5 pt-2 pb-2 rounded bg-red-500 mr-1 mt-2 text-slate-100 font-bold' onClick={toggleModal}>Cancel</button>
                        <button className='w-fit self-end pr-5 pl-5 pt-2 pb-2 rounded bg-emerald-500 mr-1 mt-2 text-slate-100 font-bold' onClick={addTab}>Create Tab</button>
                    </div>
                    <p className='text-slate-200 mt-10 w-1/2 text-center'>Don't worry, this won't change your content. To navigate through tabs as you edit, simply click on the tab you wish to edit as if you were using them to explore a post.</p>
                </div>
            </div>
            <ul id='add_tab' className='flex self-end w-1/5 justify-start flex-row-reverse content-end mr-3'>
                <li className='hover:bg-slate-300 bg-slate-400 pt-1 pr-2 pl-2 rounded-xl rounded-b-none font-bold text-slate-100 cursor-pointer' onClick={toggleModal}>+</li>
                {tabs.map((tab, key) => <li className={`text-slate-100 hover:bg-slate-300 cursor-pointer pr-2 pl-2 pt-1 rounded-xl rounded-b-none font-bold ${currentTab == key ? "bg-slate-500" : "bg-slate-400"} cursor-pointer`} pos={key} key={key} onClick={swapTab}>{tab.title}</li>)}
            </ul>
            <textarea className='w-full h-full border-solid border-2 rounded-xl border-slate-800 p-4 bg-slate-100/85' placeholder='Write your content here...' onChange={updateTabContent} contentEditable id="post_content" />
            <button className='w-fit self-end pr-5 pl-5 pt-2 pb-2 rounded bg-emerald-500 mr-1 mt-2 text-slate-100 font-bold hover:bg-emerald-400' onClick={validateContent}>Create Post</button>
        </div>
    )
}

export default PostContent