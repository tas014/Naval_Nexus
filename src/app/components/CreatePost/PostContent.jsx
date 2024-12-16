import React from 'react'
import { useState } from 'react';

const PostContent = ({ setContent }) => {
    const [tabs, setTabs] = useState([{ title: "General", content: "" }]);
    const [currentTab, setCurrentTab] = useState(0);

    const validateContent = () => {
        const postContent = document.getElementById("post_content").innerText;
        setContent(tabs);
    }

    const addTab = () => {
        const newTabName = document.getElementById('tabName')?.value;
        const newTabs = [...tabs];
        newTabs.push({
            title: newTabName,
            content: ""
        })
        setTabs(newTabs);
        toggleModal();
    }

    const toggleModal = () => {
        const cont = document.querySelector('.modal');
        cont.classList.toggle('hidden')
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
        <div>
            <div className='modal hidden'>
                <div>
                    <div>
                        <label htmlFor="tabName">Tab Name</label>
                        <input type="text" id='tabName' />
                    </div>
                    <div>
                        <button onClick={toggleModal}>Cancel</button>
                        <button onClick={addTab}>Create Tab</button>
                    </div>
                    <p>To switch tabs as you edit, simply click on the tab you wish to edit as if you were using them to explore a post.</p>
                </div>

            </div>
            <ul id='add_tab'>
                <li onClick={toggleModal}>+</li>
                {tabs.map((tab, key) => <li pos={key} key={key} onClick={swapTab}>{tab.title}</li>)}
            </ul>
            <textarea placeholder='Write your content here...' onChange={updateTabContent} contentEditable id="post_content" />
            <button onClick={validateContent}>Create Post</button>
        </div>
    )
}

export default PostContent